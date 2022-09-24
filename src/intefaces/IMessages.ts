import {IMachineContext} from "@/src/intefaces/IConfig";

export interface IMessage {
    type: string
    id: string
    content?: string | undefined
    widgetData: {
        id: string,
        name: string
    }[] | []
}
export interface IBotMessage {
    messageData: {
        content?: string | undefined,
        widgetData: {
            id: string,
            name: string
        }[] | []
    }
}
export interface IState {
    context: IMachineContext
}

