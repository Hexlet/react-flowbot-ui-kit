import {IMessage} from "@/src/intefaces/IMessages";

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
export interface IMachineContext {
    currentQuestionDetails: string | {}
    currentQuestions: {
        name: string
        text: string
        answerName: string
        id: string
    }[]
    messages: {
        type: string
        id: string
        content?: string | undefined
        widgetData: {
            id: string,
            name: string
        }[] | []
    }
    questionsChain: [
        name: string,
        text: string,
        answerName: string | undefined,
        id: string
    ][]
}
