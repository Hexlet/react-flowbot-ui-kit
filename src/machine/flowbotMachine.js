import { assign, createMachine, send } from 'xstate';
import answeringMachine from './answeringMachine';
import generateId from '../utils/idGenerator';

const getInitMessages = (config) => (
  config.initMessages.map((message) => ({ type: 'bot', content: message, id: generateId() }))
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
              messages: (context, event) => [
                ...context.messages,
                { type: 'user', content: event.text, id: generateId() },
              ],
              currentQuestionDetails: (context, event) => event.answerName,
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
                { type: 'bot', content: event.payload.answerData.content, id: generateId() },
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
