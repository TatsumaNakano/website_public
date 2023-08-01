"use client"
import { useEffect, useState } from 'react'
import { colorThemeState } from '@/states';
import { useRecoilState } from 'recoil';

// type HTMLwithHref<T> = Partial<T> & { readonly href: string }

const ColorTheme = function () {

    const [color] = useRecoilState(colorThemeState);

    useEffect(() => {
        switchColorTheme(color);
    }, [color])

    return (
        <></>
    );
}

export default ColorTheme;

const switchColorTheme = (color: string) => {
    const langStyle = color == "dark" ? "/styles/color/light.css" : "/styles/color/dark.css";//From public folder
    const existingLink = document.getElementById("color-stylesheet") as HTMLLinkElement

    if (existingLink as HTMLLinkElement) {
        existingLink.href = langStyle;
    } else {
        const link = document.createElement("link");
        link.id = "color-stylesheet";
        link.rel = "stylesheet";
        link.href = langStyle;
        document.head.appendChild(link)
    }
}

