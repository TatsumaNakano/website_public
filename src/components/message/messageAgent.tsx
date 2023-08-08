import styles from "./styles.module.scss";
import { MessageInterface } from "./interface"
import { InputTypes } from "./inputs"

class MessageAgent {

    initialized: Boolean;
    m_sessionContext: MessageInterface[];
    reflesh: Function;
    chatTemplate: any;
    currentContext: MessageInterface | null;
    afterUserInputAction: string;
    data: any;
    targetPropertyToSave: string;
    m_currentInputType: InputTypes;
    m_systemLanguage: string;
    m_buttonEnabled: boolean;
    [key: string]: any;

    // static #something = 42;
    constructor(reflesh: Function, chatTemplate: any, language: string) {
        // constructor() {
        this.initialized = false;
        this.m_sessionContext = [];
        this.currentContext = null;
        this.reflesh = reflesh;
        this.chatTemplate = chatTemplate
        this.afterUserInputAction = "";
        this.targetPropertyToSave = "";
        this.m_currentInputType = InputTypes.single;
        this.m_systemLanguage = language;
        this.m_buttonEnabled = true;
        this.data = {};
    }

    init() {
        this.initialized = true;
        this.sendChat({ ...this.chatTemplate.message.intro });
    }

    sendChat(message: MessageInterface) {
        setTimeout(() => {
            this.m_sessionContext.push({ ...message });
            this.currentContext = this.m_sessionContext[this.m_sessionContext.length - 1];
            console.log(this.data);

            //////////////////////////////////////
            // AGENT MESSAGE HANDLER
            //////////////////////////////////////
            if (message.user === "agent") {
                const inputType = getInputTypeFromMessage(message);
                this.m_currentInputType = inputType as InputTypes;
                if (inputType === InputTypes.email) {
                    this.setButtonState(false);
                }

                if (!Array.isArray(message.options)) {
                    if (message.nextAction === undefined) {
                        console.error("You need to set next action property when you set user option to input.", message);
                        return;
                    }
                    this.afterUserInputAction = message.nextAction;
                }


                if (message.saveNextInputData) {
                    this.targetPropertyToSave = message.saveNextInputData;
                }

            }

            ///////////////////////////////////////
            // CLIENT MESSAGE HANDLER
            ///////////////////////////////////////
            if (message.user === "client") {

                if (this.targetPropertyToSave) {
                    console.log(this.targetPropertyToSave)
                    // this.data[this.targetPropertyToSave] = 0
                    const property: any = this.targetPropertyToSave;
                    this.data[property] = message.message;
                    this.targetPropertyToSave = "";
                }

            }

            this.reflesh(true);
        }, 300)
    }

    triggerAction(triggeredOption: any) {

        var template = { ...this.chatTemplate.message[triggeredOption.nextAction] };


        if (this.currentContext && this.currentContext.options !== undefined) {

            //Copy so it doesn't override
            var clickedOption = { ...triggeredOption }
            clickedOption.disabled = true;

            //Leave only clicked option
            this.currentContext.options = [clickedOption];
        }

        this.afterUserInputAction !== "";
        this.sendChat(template);
    }


    triggerRegisteredAction() {
        var template = { ...this.chatTemplate.message[this.afterUserInputAction] };

        if (this.afterUserInputAction !== "") this.sendChat(template);
    }

    finalize() {
        //Send confirmation email the client
        //Send email to myself
    }

    setLanguage(newLang: string) {
        this.m_systemLanguage = newLang;
    }

    setButtonState(enabled: boolean) {
        this.m_buttonEnabled = enabled;
        this.reflesh()
    }

    get sessionContext() {
        return this.m_sessionContext;
    }

    get currentInputType() {
        return this.m_currentInputType;
    }

    get systemLanguage() {
        return this.m_systemLanguage;
    }

    get buttonEnabled() {
        return this.m_buttonEnabled;
    }
}


const getInputTypeFromMessage = function <InputType>(message: MessageInterface) {
    if (message.options && !Array.isArray(message.options)) {
        return message.options
    }

    //Just for display
    return InputTypes.single;
}


export default MessageAgent;