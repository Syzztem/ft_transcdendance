import IMessage from '../models/chat/IMessage'

export class Chat {
    messages: Array<IMessage>

    constructor()
    {
        this.messages = []
    }
}

