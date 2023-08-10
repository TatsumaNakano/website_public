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
    constructor(reflesh: Function, chatTemplate: any, language: string, ref: any) {
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
        this.chatRef = ref;
        this.data = {};
    }

    init() {
        this.initialized = true;
        this.data = {};
        this.m_sessionContext = [];
        this.sendChat({ ...this.chatTemplate.message.intro });
    }

    sendChat(message: MessageInterface) {

        // setTimeout(() => {
        this.m_sessionContext.push({ ...message });
        this.currentContext = this.m_sessionContext[this.m_sessionContext.length - 1];
        // console.log(this.data);

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
                // console.log(this.targetPropertyToSave)
                // this.data[this.targetPropertyToSave] = 0
                const property: any = this.targetPropertyToSave;

                if (typeof (message.message) === "object") {//If this is language based property
                    this.data[property] = message.message[this.systemLanguage];
                    // console.log("Language based", this.data[property])
                } else {
                    this.data[property] = message.message;
                    // console.log("Regular Property", this.data[property])
                }

                this.targetPropertyToSave = "";
            }

        }

        this.reflesh(true);
        // console.log(this.data)
        if (message.user === "agent" && message.nextAction === "finalize") { this.finalize(); }

        // }, 300)

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


        ///////////////////////////////////////
        // SAVE SELECTED ITEM FROM SUGGESTED OPTIONS
        ///////////////////////////////////////
        if (triggeredOption.user === "suggestion") {
            if (triggeredOption.saveThisInputData) {
                const property: any = triggeredOption.saveThisInputData;

                if (typeof (triggeredOption.message) === "object") {//If this is language based property
                    this.data[property] = triggeredOption.message[this.systemLanguage];
                    // console.log("Language based", this.data[property])
                } else {
                    this.data[property] = triggeredOption.message;
                    // console.log("Regular Property", this.data[property])
                }
            }

        }

        this.afterUserInputAction !== "";
        this.sendChat(template);
    }


    triggerRegisteredAction() {
        var template = { ...this.chatTemplate.message[this.afterUserInputAction] };

        if (this.afterUserInputAction !== "") this.sendChat(template);
    }

    finalize() {

        const registerUser = async (data: any) => {

            ///////////////////////////////////////
            // Bake class style to css
            ///////////////////////////////////////
            // function applyStyle(el: any) {
            //     var s = getComputedStyle(el);

            //     for (let key in s) {
            //         let prop = key;//.replace(/\-([a-z])/g, v => v[1].toUpperCase());
            //         el.style[prop] = s[key];
            //     }
            // }

            // var elements = this.chatRef.current.querySelectorAll('*');

            // console.log(elements);
            // elements.forEach((element: HTMLElement) => {
            //     var s = getComputedStyle(element);
            //     for (let key in s) {
            //         let prop: any = key;//.replace(/\-([a-z])/g, v => v[1].toUpperCase());
            //         element.style[prop] = s[key];
            //     }
            // });

            // console.log(elements);

            // data.conversation = elements.innerHTML;
            data.title = this.chatTemplate.thankyou[this.systemLanguage];
            data.emailMessage = this.chatTemplate.emailMessage[this.systemLanguage];
            data.summeryTags = this.chatTemplate.summeryTags[this.systemLanguage];
            data.signature = this.chatTemplate.signature[this.systemLanguage];
            const msg = JSON.stringify(data)

            // console.log(msg)
            const res = await fetch('/api/sendClient', {
                body: msg,
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
        }


        registerUser(this.data);

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