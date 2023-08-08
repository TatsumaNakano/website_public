"use client"

import SearchBase from "@/components/searchBase";
import styles from "./styles.module.scss";
import LinkItem from "../layout/header/linkItem";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { headerHeightState, messageViewState, mobilePageNavigatorHeight, headerShrinkState, languageState } from "@/states";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import breakpoints from "@/utility/breakpoints";
import MessageAgent from "./messageAgent";
import { MessageInterface } from "./interface"
import Inputs, { InputTypes } from "./inputs";
import chatTemplate from "./chatTemplate.json"
import { validate } from 'email-validator';

var messageAgent: MessageAgent; //new MessageAgent();

const Message = () => {

    const [messageVisible, setMessageVisible] = useRecoilState(messageViewState);
    const [headerHeight, setHeaderHeight] = useRecoilState(headerHeightState);
    const [mpnHeight, setMpnHeight] = useRecoilState(mobilePageNavigatorHeight);
    const [lang, setLanguage] = useRecoilState(languageState);
    const menuOpenStyle = messageVisible ? styles.show : styles.hide;
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [inputType, setInputType] = useState<any>(InputTypes);
    const [isInputActive, setInputActive] = useState(false);
    const [buttonEnable, setCanSend] = useState(false);


    const ref = useRef<any>(null);
    const scrollTargetRef = useRef<any>(null);
    const msgInputRef = useRef<any>(null);
    const [sessionContext, setSessionContext] = useState<MessageInterface[]>([]);
    var [windowHeight, setWindowHeight] = useState<number>(0);

    const register = () => {
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        if (!ref?.current) return;
        ref.current.scrollTo(0, ref.current.scrollHeight);
        register();
        messageAgent = new MessageAgent(setShouldUpdate, chatTemplate, lang);
        messageAgent.init();
        // console.log("setInputType", messageAgent.currentInputType)
        setInputType(messageAgent.currentInputType);

        window.addEventListener("resize", register);
        return window.removeEventListener("resize", register)
    }, [])

    useEffect(() => {
        //Disable scroll on search bar open
        document.body.style.overflow = messageVisible ? "hidden" : "scroll";
        if (!scrollTargetRef?.current) return;

        if (messageVisible) {
            scrollTargetRef.current.scrollTo(0, scrollTargetRef.current.scrollHeight);
            setSessionContext(messageAgent.sessionContext);
        };
    }, [messageVisible])

    useEffect(() => {
        //This will update the message
        setSessionContext(messageAgent.sessionContext);
        scrollTargetRef.current.scrollTo(0, scrollTargetRef.current.scrollHeight);

        setInputType(messageAgent.currentInputType);
        const inputActive = !Array.isArray(messageAgent.currentContext?.options);
        setInputActive(inputActive);

        // console.log(msgInputRef.current)
        if (msgInputRef.current) {
            if (inputActive) {
                // console.log(msgInputRef);
                msgInputRef.current.focus();
            } else {
                msgInputRef.current.blur();
            }
        }

        setShouldUpdate(false);
    }, [shouldUpdate])

    useEffect(() => {
        messageAgent.setLanguage(lang);
    }, [lang])

    const isMobileLayout = () => {
        if (typeof (window) !== "undefined") return (breakpoints.tabletWide > window.innerWidth);
        else return false
    }


    const mpnAdjustment = isMobileLayout() ? (mpnHeight ? mpnHeight : 0) : 0;
    const height = windowHeight - headerHeight - mpnAdjustment;
    const searchStyle = { height: `${height}px`, marginTop: `${headerHeight}px` }

    const inputStyle = isInputActive ? null : styles.disabled;

    return (
        <div className={`${styles.message} ${menuOpenStyle}`} style={searchStyle} ref={ref}>
            <div>
                <div className={styles.conversation} ref={scrollTargetRef}>
                    <ul>
                        {sessionContext.map((message, key) => {
                            // console.log(message)
                            if (message.user == "agent") {
                                return (<React.Fragment key={"agent_" + key}>
                                    <li className={styles.agent}>
                                        <span className="en">{message.message}</span>
                                        <span className="jp">{message.message_jp}</span>
                                    </li>
                                    {optionElement(message)}
                                </React.Fragment>)
                            }
                            else if (message.user == "client") {
                                return (<li className={styles.client} key={"client_" + key}>
                                    <span>{message.message}</span>
                                </li>)
                            } else {
                                return <li key={"error_" + key}>Something went wrong</li>
                            }
                        })}
                    </ul>
                </div>

                <div className={`${styles.replyInput} ${inputStyle}`}>

                    <InputBar ref={msgInputRef} setShouldUpdate={setShouldUpdate} canSend={setCanSend} />

                </div>
            </div>
        </div>
    );
}


const optionElement = (message: MessageInterface) => {
    if (!message.options) return;
    if (!Array.isArray(message.options)) return;

    return (<li className={styles.clientChoice} key={message.message}>
        <ul>
            {message.options.map((option: any, key: number) => {

                const itemKey = `option_${Date.now()}_${key}`;

                return (<li key={itemKey} onClick={() => {
                    if (option.disabled === undefined || !option.disabled) messageAgent.triggerAction(option);
                }}>
                    <span className="en">{option.message}</span>
                    <span className="jp">{option.message_jp}</span>
                </li>)

            })}
        </ul>
    </li>)
}

interface InputBarProps {
    setShouldUpdate: Function
    canSend: Function
}

// eslint-disable-next-line react/display-name
const InputBar = forwardRef(function ({ setShouldUpdate }: InputBarProps, ref: any) {

    const [buttonEnabled, setButtonState] = useState(true);

    const sendMessage = () => {
        if (ref.current.value === "") return;

        var currencySymbol = "";
        if (messageAgent.currentContext?.append_symbol) currencySymbol = messageAgent.currentContext?.append_symbol[messageAgent.systemLanguage];
        messageAgent.sendChat({ message: currencySymbol + ref.current.value, user: "client" });

        setShouldUpdate(true);
        messageAgent.triggerRegisteredAction();
        ref.current.value = "";
    }

    const onEnterKey = (e: any) => {
        if (messageAgent.currentContext?.preventSendWithEnter) return;
        if (e.nativeEvent.isComposing || e.key !== "Enter") return
        if (!buttonEnabled) return;
        sendMessage();

    }

    const onChange = (e: any) => {
        if (messageAgent.currentContext?.options == InputTypes.email) {
            setButtonState(validate(e.target.value))
        } else {
            setButtonState(true);
        }
    }
    // useEffect(() => {
    //     console.log("This is working");
    //     setButtonState(messageAgent?.buttonEnabled);
    // }, [messageAgent?.buttonEnabled])




    const buttonStyle = buttonEnabled ? styles.buttonEnabled : styles.buttonDisabled;

    // const sendButtonText = messageAgent.currentContext?.placeholder

    return (
        <>
            <div>
                <div>
                    <Inputs agent={messageAgent ? messageAgent : null} ref={ref} onEnterKey={onEnterKey} onChange={onChange} />
                </div>
            </div>

            <div>
                <button className={buttonStyle} onClick={sendMessage}>
                    <span className="en">Send</span>
                    <span className="jp">送信</span>
                </button>
            </div>
        </>
    )
})


export default Message;