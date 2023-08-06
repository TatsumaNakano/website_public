
export interface MessageInterface {
    message: string
    message_jp?: string
    user: string,
    options?: string | object[],
    nextAction?: string,
    saveNextInputData?: string,
}
