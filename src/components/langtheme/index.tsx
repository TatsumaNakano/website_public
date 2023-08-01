"use client"
import { useEffect, useState } from 'react'
import { languageState } from '@/states';
import { useRecoilState } from 'recoil';

const LangTheme = function () {

    const [lang] = useRecoilState(languageState);

    useEffect(() => {
        switchLanguage(lang)
    }, [lang])

    return (
        <></>
    );
}

export default LangTheme;

const switchLanguage = (lang: string) => {
    const langStyle = lang == "en" ? "/styles/lang/en.css" : "/styles/lang/jp.css";//From public folder
    const existingLink = document.getElementById("lang-stylesheet") as HTMLLinkElement

    if (existingLink as HTMLLinkElement) {
        existingLink.href = langStyle;
    } else {
        const link = document.createElement("link");
        link.id = "lang-stylesheet";
        link.rel = "stylesheet";
        link.href = langStyle;
        document.head.appendChild(link)
    }
}

