import {createMachine, sendParent} from 'xstate';
import generateId from '../utils/idGenerator';
import {IAnswerData, IConfig, IMachineEvent} from "../intefaces/IConfig";

const getAnswerData = (config: IConfig, name: string) => config.answers.find((answer) => answer.name === name);

export default createMachine({
  tsTypes: {} as import("./answeringMachine.typegen").Typegen0,
  id: 'answer-creator',
  initial: 'waitingQuestionDetails',
  schema: {
    events: {} as { type: 'PREPARE_ANSWER' }
  },
  states: {
    waitingQuestionDetails: {
      on: <any>{
        PREPARE_ANSWER: {
          actions: sendParent((context: any | undefined, event: IMachineEvent) => {
            const { questionDetails, configuration } = event;
            const answerData: IAnswerData | undefined = getAnswerData(configuration, questionDetails);
            const nextQuestions = answerData!.questionNames.map((questionName: string) => {
              const questionData = configuration.questions.find(({ name }) => (
                  name === questionName
              ));
              return { ...questionData, id: generateId() };
            });
            const widgetNames = answerData!.widgets || [];
            const widgetData = widgetNames.map((name: string) => ({ name, id: generateId() }));
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

