export interface IMessage {
    type: string
    id: string
    content?: string | undefined
    widgetData: {
        id: string,
        name: string
    }[] | []
}

export interface IState {
    context: {
        currentQuestionDetails?: string | {}
        currentQuestions: {
            name: string
            text: string
            answerName: string
            id: string
        }[] | []
        messages: IMessage[] | undefined
        questionsChain: [
            name: string,
            text: string,
            answerName: string | undefined,
            id: string
        ][]
    }
}

