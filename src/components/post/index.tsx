"use client"

import styles from "./styles.module.scss"

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';

import { useEffect, Suspense } from "react";
import LoadingTemplate from "../loading";

export default function PostTemplate(data: any, props: any) {

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('json', json);

    useEffect(() => {
        // invoke on client side
        hljs.highlightAll();
    }, [hljs]);

    // console.log(javascript);
    // console.log(data)
    const icon = getCompanyIcon(data.data?.post.post_setting.workAt);

    const jpTitle = data.data.post.post_setting.jptitle ? data.data.post.post_setting.jptitle : data.data.post.title
    return (

        <div className={styles.post}>
            <Suspense fallback={<LoadingTemplate />}>
                <div className={styles.titleSection}>
                    <h1>
                        <span className="en">{data.data.post.title}</span>
                        <span className="jp">{jpTitle}</span>
                    </h1>
                    {icon ? icon : null}
                    {/* <img src={"/company_icons/swordfish.svg"} alt="" /> */}
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.data.post.content }}></div>
            </Suspense>
        </div>
    );
}

const getCompanyIcon = (workAt: string | null | undefined) => {
    if (workAt) {
        // console.log(workAt.toLowerCase());
        if (workAt.toLowerCase() === "swordfish") {
            return <a target="_blank" href="https://www.ibelieveinswordfish.com/"><img src={"/company_icons/swordfish.svg"} alt="" /></a>;
        }
    }
    return null;
}