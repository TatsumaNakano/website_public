"use client"

import styles from "./styles.module.scss"

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import { languageState } from "@/states"
import { useRecoilState } from "recoil"

import { useEffect, useRef } from "react";

export default function PostTemplate(data: any, props: any) {

    const [lang, setLang] = useRecoilState(languageState);
    const contentsContainer = useRef<any>(null);

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('json', json);

    useEffect(() => {
        // invoke on client side
        hljs.highlightAll();
    }, [hljs]);

    useEffect(() => {
        if (!contentsContainer?.current) return;
        contentsContainer.current.innerHTML = "";
        // console.dir(contentsContainer.current)
        const content = sortBasedOnLanguage(data.data.post?.content, lang);
        // if (typeof (content) !== Node) return
        contentsContainer.current.appendChild(content);
    }, [lang])

    const icon = getCompany(data.data?.post?.post_setting.workAt);
    const jpTitle = data.data?.post?.post_setting.jptitle ? data.data.post?.post_setting.jptitle : data.data.post?.title

    const date = new Date(data.data.post?.date);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (

        <div className={styles.post}>
            <div className={styles.titleSection}>
                <div>
                    <label className="en">{`${date.getFullYear()} ${monthNames[date.getMonth()]} ${date.getDate()}`}</label>
                    <label className="jp">{`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}</label>
                    <h1>
                        <span className="en">{data.data.post?.title}</span>
                        <span className="jp">{jpTitle}</span>
                    </h1>
                </div>
                {icon ? icon : null}
                {/* <img src={"/company_icons/swordfish.svg"} alt="" /> */}
            </div>
            <div ref={contentsContainer} ></div>
        </div>
    );
}

const getCompany = (workAt: string | null | undefined) => {
    if (workAt) {
        // console.log(workAt.toLowerCase());
        if (workAt.toLowerCase() === "swordfish") {
            return (<div>
                <label>
                    <span className="en">Project @</span>
                    <span className="jp">プロジェクト @</span>
                </label>
                <a target="_blank" href="https://www.ibelieveinswordfish.com/"><img src={"/company_icons/swordfish.svg"} alt="" /></a>
            </div>);
        }
    }
    return null;
}

const sortBasedOnLanguage = (str: string, lang: string) => {
    if (typeof (window) === "undefined") return;
    var e = document.createElement('div');
    e.innerHTML = str;
    const targetLang = lang === "ja" ? ".en" : ".jp";
    const removeTarget = e.querySelectorAll(targetLang);
    removeTarget.forEach(elem => {
        elem.remove();
    })
    return e.childNodes.length === 0 ? "" : e; //e.childNodes[0].nodeValue;
} 