import styles from "./styles.module.scss";
import { MessageInterface } from "./interface"

class MessageAgent {

    initialized: Boolean;
    m_sessionContext: MessageInterface[];
    reflesh: Function;
    chatTemplate: any;
    afterUserInputAction: string;
    userEmail: string;
    targetPropertyToSave: string;
    [key: string]: any;

    constructor(reflesh: Function, chatTemplate: any) {
        // constructor() {
        this.initialized = false;
        this.m_sessionContext = [];
        this.reflesh = reflesh;
        this.chatTemplate = chatTemplate
        this.afterUserInputAction = "";
        this.userEmail = "";
        this.targetPropertyToSave = "";
        // console.log("Instance")
    }

    init() {
        this.initialized = true;
        this.sendChat(this.chatTemplate.message.intro);
        // console.log("Init", this.m_sessionContext);
    }

    sendChat(message: MessageInterface) {
        this.m_sessionContext.push(message);

        if (message.options === "input") {
            if (message.nextAction === undefined) {
                console.error("You need to set next action property when you set user option to input.", message);
                return;
            }

            this.afterUserInputAction = message.nextAction;
            console.log("Next action: ", this.afterUserInputAction)
        }



        if (this.targetPropertyToSave) {
            this[this.targetPropertyToSave] = 0
            const property: string = this.targetPropertyToSave;
            this[property] = message.message;
            this.targetPropertyToSave = "";
        }

        if (message.saveNextInputData) {
            this.targetPropertyToSave = message.saveNextInputData;
        }

        this.reflesh(true);
    }

    triggerAction(nextAction: string) {
        const template = this.chatTemplate.message[nextAction];
        this.afterUserInputAction !== "";
        this.sendChat(template);
    }


    triggerRegisteredAction() {
        const template = this.chatTemplate.message[this.afterUserInputAction];

        this.afterUserInputAction !== "";
        this.sendChat(template);
    }

    finalize() {
        //Send confirmation email the client
        //Send email to myself
    }

    get sessionContext() {
        // console.log("Get session context", this.m_sessionContext)
        return (this.m_sessionContext);
    }

}



export default MessageAgent;