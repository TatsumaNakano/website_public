"use client"

import styles from "./styles.module.scss"

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';

import { useEffect } from "react";

export default function PostTemplate(data: any, props: any) {

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('json', json);

    useEffect(() => {
        // invoke on client side
        hljs.highlightAll();
    }, [hljs]);

    const jpTitle = data.data.post.post_setting.jptitle ? data.data.post.post_setting.jptitle : data.data.post.title

    return (
        <div className={styles.post}>
            <h1>
                <span className="en">{data.data.post.title}</span>
                <span className="jp">{jpTitle}</span>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: data.data.post.content }}></div>
        </div>
    );
}

