import { assign, createMachine, send } from 'xstate';
import answeringMachine from './answeringMachine';
import generateId from '../utils/idGenerator';
import { IConfig } from "@/src/intefaces/IConfig";

const getInitMessages = (config: IConfig) => (
  config.initMessages.map((message) => ({
    type: 'bot',
    content: message,
    id: generateId(),
    widgetData: [],
  }))
);

const getInitQuestions = (config: IConfig) => (
  config.initQuestions
    .map((questionName) => {
      const questionData = config.questions.find((question) => question.name === questionName);
      return { ...questionData, id: generateId() };
    })
);

const createBotMachine = (configuration: IConfig) => {
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
        on: <any>{
          TOGGLE: 'idle',
          ASK: {
            target: 'answering',
            actions: assign({
              questionsChain: (context: any | undefined) => [...context.questionsChain, context.currentQuestions],
              messages: (context: any | undefined, event: any) => [
                ...context.messages,
                { type: 'user', content: event.text, id: generateId() },
              ],
              currentQuestionDetails: (context, event: any) => event.answerName,
            }),
          },
          PREVIOUS: {
            actions: assign({
              currentQuestions: (context: any | undefined) => {
                const prevQuestions = context.questionsChain.pop();
                return prevQuestions.map((question: any) => ({
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
        entry: send((context: any) => ({
          type: 'PREPARE_ANSWER',
          questionDetails: context.currentQuestionDetails,
          configuration,
        }), {
          to: 'answer-creator',
        }),
        on: <any>{
          TOGGLE: 'idle',
          REPLY: {
            target: 'waitingQuestion',
            actions: assign({
              messages: (context: any | undefined, event: any) => [
                ...context.messages,
                {
                  type: 'bot',
                  content: event.payload.answerData.content,
                  id: generateId(),
                  widgetData: event.payload.widgetData,
                },
              ],
              currentQuestions: (context, event: any) => event.payload.nextQuestions,
            }),
          },
        },
      },
    },
  });
};

export default createBotMachine;
