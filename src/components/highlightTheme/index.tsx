"use client"
import { useEffect, useState } from 'react'
import { colorThemeState } from '@/states';
import { useRecoilState } from 'recoil';

const HighlightTheme = function () {

    const [color] = useRecoilState(colorThemeState);

    useEffect(() => {
        switchHighlightTheme(color);
    }, [color])

    return (
        <></>
    );
}

export default HighlightTheme;

const switchHighlightTheme = (color: string) => {
    const langStyle = color == "dark" ? "/styles/color/highlight/light_highlight.css" : "/styles/color/highlight/dark_highlight.css";//From public folder
    const existingLink = document.getElementById("highlight-stylesheet") as HTMLLinkElement

    if (existingLink as HTMLLinkElement) {
        existingLink.href = langStyle;
    } else {
        const link = document.createElement("link");
        link.id = "highlight-stylesheet";
        link.rel = "stylesheet";
        link.href = langStyle;
        document.head.appendChild(link)
    }
}

