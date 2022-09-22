import { createMachine, sendParent } from 'xstate';
import generateId from '../utils/idGenerator.ts';

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
            console.log('event', event)
            console.log('context', context)
            // console.log('qd', questionDetails)
            const answerData = getAnswerData(configuration, questionDetails);
            // console.log('answerdata',answerData)
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
