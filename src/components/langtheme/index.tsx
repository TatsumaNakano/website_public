"use client"
import { useEffect, useState } from 'react'
import { languageState } from '@/states';
import { useRecoilState } from 'recoil';

export default () => {

    const [lang] = useRecoilState(languageState);

    useEffect(() => {
        switchLanguage(lang)
    }, [lang])

    return (
        <></>
    );
}

const switchLanguage = (lang: string) => {
    const langStyle = lang == "en" ? "/styles/lang/en.css" : "/styles/lang/jp.css";//From public folder
    const existingLink = document.getElementById("lang-stylesheet")

    if (existingLink) {
        existingLink.href = langStyle;
    } else {
        const link = document.createElement("link");
        link.id = "lang-stylesheet";
        link.rel = "stylesheet";
        link.href = langStyle;
        document.head.appendChild(link)
    }
}

