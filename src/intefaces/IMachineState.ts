export interface IConfig {
    answers: {
        name: string,
        content: string,
        questionNames: string[] | []
    }[]
    initMessages: string[]
    initQuestions: string[]
    questions: {
        name: string
        text: string
        answerName: string
    }[]
}

export interface IAnswerData {
    name: string
    content: string
    questionNames: string[] | []
    widgets?: string[]
}

export interface IMachineEvent {
    type: string,
    questionDetails: string
    configuration: IConfig
}
