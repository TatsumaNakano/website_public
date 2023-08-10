
export interface MessageInterface {
    message: any,
    user: string,
    options?: string | object[],
    nextAction?: string,
    saveNextInputData?: string,
    saveThisInputData?: string,
    placeholder?: any,
    preventSendWithEnter?: boolean,
    append_symbol?: any,
    default_price?: any
}
