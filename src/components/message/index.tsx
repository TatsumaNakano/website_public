"use client"

import SearchBase from "@/components/searchBase";
import styles from "./styles.module.scss";
import LinkItem from "../layout/header/linkItem";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { headerHeightState, messageViewState, mobilePageNavigatorHeight } from "@/states";
import React, { useRef, useState, useEffect } from "react";
import breakpoints from "@/utility/breakpoints";
import MessageAgent from "./messageAgent";
import { MessageInterface } from "./interface"

var messageAgent: MessageAgent; //new MessageAgent();

const Message = () => {

    const [messageVisible, setMessageVisible] = useRecoilState(messageViewState);
    const [headerHeight, setHeaderHeight] = useRecoilState(headerHeightState);
    const [mpnHeight, setMpnHeight] = useRecoilState(mobilePageNavigatorHeight);
    const menuOpenStyle = messageVisible ? styles.show : styles.hide;
    const [shouldUpdate, setShouldUpdate] = useState(false);

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
        messageAgent = new MessageAgent(setShouldUpdate, chatTemplate);
        messageAgent.init();
        window.addEventListener("resize", register);
        return window.removeEventListener("resize", register)
    }, [])

    useEffect(() => {
        //Disable scroll on search bar open
        document.body.style.overflow = messageVisible ? "hidden" : "scroll";
        if (!scrollTargetRef?.current) return;
        // console.log("Should be scrolling");

        if (messageVisible) {
            scrollTargetRef.current.scrollTo(0, scrollTargetRef.current.scrollHeight);
            setSessionContext(messageAgent.sessionContext);

        };
    }, [messageVisible])

    useEffect(() => {
        //This will update the message
        // console.log("Should Update");
        setSessionContext(messageAgent.sessionContext);
        scrollTargetRef.current.scrollTo(0, scrollTargetRef.current.scrollHeight);
        setShouldUpdate(false);
    }, [shouldUpdate])

    const isMobileLayout = () => {
        if (typeof (window) !== "undefined") return (breakpoints.tabletWide > window.innerWidth);
        else return false
    }

    const sendMessage = () => {
        if (msgInputRef.current.value === "") return;
        messageAgent.sendChat({ message: msgInputRef.current.value, user: "client" });
        setShouldUpdate(true);
        messageAgent.triggerRegisteredAction();
        msgInputRef.current.value = "";
    }

    const onEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing || e.key !== "Enter") return
        sendMessage();
    }

    const mpnAdjustment = isMobileLayout() ? (mpnHeight ? mpnHeight : 0) : 0;
    const height = windowHeight - headerHeight - mpnAdjustment;
    const searchStyle = { height: `${height}px`, marginTop: `${headerHeight}px` }

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

                <div className={styles.replyInput}>

                    <div>
                        <input onKeyDown={onEnterKey} ref={msgInputRef}></input>
                    </div>

                    <div>
                        <button onClick={sendMessage}>
                            <span className="en">Send</span>
                            <span className="jp">送信</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

const optionElement = (message: MessageInterface) => {
    if (!message.options) return;
    if (Array.isArray(message.options)) {
        return (<li className={styles.clientChoice} key={message.message}>
            <ul>
                {message.options.map((option: any, key: number) => {
                    const itemKey = `option_${Date.now()}_${key}`;
                    return (<li key={itemKey} onClick={() => messageAgent.triggerAction(option.nextAction)}>
                        <span className="en">{option.message}</span>
                        <span className="jp">{option.message_jp}</span>
                    </li>)
                })}
            </ul>
        </li>)
    } else if (message.options === "input") {

    } else {
        console.error(`${message.options} is not supported.`)
    }
}

// const msgElement = (message: MessageInterface) => {
//     if (message.user == "agent") {
//         return (<li className={styles.agent}>
//             <span>{message.message}</span>
//             <span>{message.message_jp}</span>
//         </li>)
//     } else if (message.user == "client") {
//         return (<li className={styles.agent}>
//             <span>{message.message}</span>
//         </li>)
//     }
// }

const chatTemplate = {
    message: {
        intro: {
            message: "Hello! Could you please let me know the nature of your inquiry?",
            message_jp: "こんにちは！お問い合わせ内容をお知らせください。",
            user: "agent",
            options: [
                {
                    message: "Request for creating something",
                    message_jp: "制作を依頼したい",
                    detail: "If I will be working on beginning to the end, please select this.",
                    detail_jp: "制作のすべての工程の委託をご希望の場合はこちら",
                    user: "suggestion",
                    nextAction: "requestCreate"
                },
                {
                    message: "Request for freelancing",
                    message_jp: "仕事を手伝ってほしい",
                    detail: "If I will be the part of creative/development team, please select this.",
                    detail_jp: "一時的に制作チームへの参加のご依頼の場合はこちら",
                    user: "suggestion",
                    nextAction: "requestFreelancing"
                },
                {
                    message: "Let's set a casual Zoom meeting",
                    message_jp: "カジュアルZoom面談をしたい",
                    user: "suggestion",
                    nextAction: "requestMeeting"
                },
                {
                    message: "Other inquiries",
                    message_jp: "その他お問い合わせ",
                    user: "suggestion",
                    nextAction: "detail"
                }
            ]

        },
        requestCreate: {
            message: "Thanks for your interest!🙂 What are you looking to create?",
            message_jp: "興味を持っていただきありがとうございます🙂。どういった物の制作をお求めでしょうか。",
            user: "agent",
            options: [
                {
                    message: "Website",
                    message_jp: "ウェブサイト",
                    nextAction: "detail"
                },
                {
                    message: "Video",
                    message_jp: "動画",
                    nextAction: "detail"
                },
                {
                    message: "App(iOS & Android)",
                    message_jp: "アプリ",
                    nextAction: "detail"
                },
                {
                    message: "Others",
                    message_jp: "その他",
                    nextAction: "detail"
                }
            ]
        },
        requestFreelancing: {
            message: "Thanks for your interest!🙂 What type of job can I help you with?",
            message_jp: "興味を持っていただきありがとうございます🙂。どのようなお仕事のお手伝いをできるかお聞かせください。",
            user: "agent",
            options: "input",
            nextAction: "email"
        },
        requestMeeting: {
            message: "It will be nice to chat casually. When will be the best time for you to chat?",
            message_jp: "気軽にお話しましょう。都合のいい日程と時間帯を複数教えてください。",
            user: "agent",
            options: "calender",
            nextAction: "email"
        },
        detail: {
            message: "Could you let me know more details?",
            message_jp: "もう少し詳細も教えてください。",
            user: "agent",
            options: "input",
            nextAction: "email"
        },
        email: {
            message: "What will be a good email address that I can follow back?",
            message_jp: "折り返し連絡させて頂きますので、メールアドレスを教えてください。",
            user: "agent",
            options: "input",
            saveNextInputData: "userEmail",
            nextAction: "confirmEmail"
        },
        confirmEmail: {
            message: "Is the email looks correct to you?",
            message_jp: "メールアドレスはこちらでお間違いないでしょうか。",
            user: "agent",
            options: [
                {
                    message: "Yes, that's correct.",
                    message_jp: "間違いありません。",
                    nextAction: "name"
                },
                {
                    message: "No, I need to fix.",
                    message_jp: "修正が必要です。",
                    nextAction: "email"
                }

            ]
        },
        name: {
            message: "Lastly, may I ask your name?",
            message_jp: "最後にあなたのお名前を教えてください。",
            user: "agent",
            options: "input",
            nextAction: "sent"
        },
        sent: {
            message: "Thank you for your inquiry! You will be receiving a confirmation email. I will be following back to you as soon as possible.🙏",
            message_jp: "お問い合わせありがとうございました！確認のメールをお送りさせて頂いております。できるだけ早急に連絡させて頂きますので、今しばらくお待ちください。ご縁がありますことを願っています🙏",
            user: "agent",
            nextAction: "end"
        }
    }
}

export default Message;