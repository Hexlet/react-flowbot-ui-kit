import { createMachine, sendParent } from 'xstate';
import generateId from '../utils/idGenerator';

const getAnswerData = (config, name) => config.answers.find((answer) => answer.name === name);

export default createMachine({
  id: 'answer-creator',
  initial: 'waitingQuestionDetails',
  states: {
    waitingQuestionDetails: {
      on: {
        PREPARE_ANSWER: {
          actions: sendParent((context, event) => {
            const { questionDetails, configuration } = event;
            const answerData = getAnswerData(configuration, questionDetails);
            const nextQuestions = answerData.questionNames.map((questionName) => {
              const questionData = configuration.questions.find(({ name }) => (
                name === questionName
              ));
              return { ...questionData, id: generateId() };
            });
            const widgetNames = answerData.widgets || [];
            const widgetData = widgetNames.map((name) => ({ name, id: generateId() }));
            const payload = {
              answerData,
              nextQuestions,
              widgetData,
            };

            return { type: 'REPLY', payload };
          }, { delay: 1000 }),
        },
      },
    },
  },
});
