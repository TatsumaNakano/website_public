"use client"

import styles from "@/styles/post.module.scss"

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';

import { useEffect } from "react";


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);


export default (data: any, props: any) => {

    useEffect(() => {
        // client side で invoke
        hljs.highlightAll();
    }, [hljs]);

    // console.log(data);

    return (
        <div className={styles.post}>
            <h1>
                <span className="en">{data.data.post.title}</span>
                <span className="jp">{data.data.post.post_setting.jptitle}</span>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: data.data.post.content }}></div>
        </div>
    );
}

