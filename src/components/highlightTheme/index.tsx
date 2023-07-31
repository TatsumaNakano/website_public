"use client"
import { useEffect, useState } from 'react'
import { colorThemeState } from '@/states';
import { useRecoilState } from 'recoil';

export default () => {

    const [color] = useRecoilState(colorThemeState);

    useEffect(() => {
        switchHighlightTheme(color);
    }, [color])

    return (
        <></>
    );
}

const switchHighlightTheme = (color: string) => {
    const langStyle = color == "dark" ? "/styles/color/highlight/light_highlight.css" : "/styles/color/highlight/dark_highlight.css";//From public folder
    const existingLink = document.getElementById("highlight-stylesheet")

    if (existingLink) {
        existingLink.href = langStyle;
    } else {
        const link = document.createElement("link");
        link.id = "highlight-stylesheet";
        link.rel = "stylesheet";
        link.href = langStyle;
        document.head.appendChild(link)
    }
}

