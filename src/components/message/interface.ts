
export interface MessageInterface {
    message: string,
    message_jp?: string,
    user: string,
    options?: string | object[],
    nextAction?: string,
    saveNextInputData?: string,
    placeholder?: any,
    preventSendWithEnter?: boolean,
    append_symbol?: any,
    default_price?: any
}
