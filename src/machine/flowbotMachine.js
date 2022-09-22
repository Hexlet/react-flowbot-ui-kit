import { assign, createMachine, send } from 'xstate';
import answeringMachine from './answeringMachine';
import generateId from '../utils/idGenerator.ts';

const getInitMessages = (config) => (
  config.initMessages.map((message) => ({
    type: 'bot',
    content: message,
    id: generateId(),
    widgetData: [],
  }))
);

const getInitQuestions = (config) => (
  config.initQuestions
    .map((questionName) => {
      const questionData = config.questions.find((question) => question.name === questionName);
      return { ...questionData, id: generateId() };
    })
);

const createBotMachine = (configuration) => {
  const initMessages = getInitMessages(configuration);
  const initQuestions = getInitQuestions(configuration);

  return createMachine({
    id: 'flowbot',
    initial: 'idle',
    context: {
      currentQuestions: initQuestions,
      currentQuestionDetails: {},
      questionsChain: [],
      messages: initMessages,
    },
    states: {
      idle: {
        on: { TOGGLE: 'waitingQuestion' },
      },
      waitingQuestion: {
        on: {
          TOGGLE: 'idle',
          ASK: {
            target: 'answering',
            actions: assign({
              questionsChain: (context) => [...context.questionsChain, context.currentQuestions],
              messages: (context, event) => [
                ...context.messages,
                { type: 'user', content: event.text, id: generateId() },
              ],
              currentQuestionDetails: (context, event) => event.answerName,
            }),
          },
          PREVIOUS: {
            actions: assign({
              currentQuestions: (context) => {
                const prevQuestions = context.questionsChain.pop();
                return prevQuestions.map((question) => ({
                  ...question,
                  id: generateId(),
                }));
              },
            }),
          },
          RESET: {
            actions: assign({
              questionsChain: () => [],
              currentQuestionDetails: () => {},
              currentQuestions: () => initQuestions,
            }),
          },
        },
      },
      answering: {
        invoke: {
          id: 'answer-creator',
          src: answeringMachine,
        },
        entry: send((context) => ({
          type: 'PREPARE_ANSWER',
          questionDetails: context.currentQuestionDetails,
          configuration,
        }), {
          to: 'answer-creator',
        }),
        on: {
          TOGGLE: 'idle',
          REPLY: {
            target: 'waitingQuestion',
            actions: assign({
              messages: (context, event) => [
                ...context.messages,
                {
                  type: 'bot',
                  content: event.payload.answerData.content,
                  id: generateId(),
                  widgetData: event.payload.widgetData,
                },
              ],
              currentQuestions: (context, event) => event.payload.nextQuestions,
            }),
          },
        },
      },
    },
  });
};

export default createBotMachine;
