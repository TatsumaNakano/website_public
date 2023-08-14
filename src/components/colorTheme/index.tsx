"use client"
import { useEffect, useMemo, useState } from 'react'
import { colorThemeState, siteLoaded } from '@/states';
import { useRecoilState } from 'recoil';

// type HTMLwithHref<T> = Partial<T> & { readonly href: string }

const ColorTheme = function () {

    const [color] = useRecoilState(colorThemeState);
    const [isSiteLoaded, setSiteLoaded] = useRecoilState(siteLoaded);


    useEffect(() => {
        setSiteLoaded(true);
        switchColorTheme(color);
        setTimeout(() => {
            document.body.style.opacity = "1";
        }, 500)

    }, [color])

    return (
        <></>
    );
}

export default ColorTheme;

const switchColorTheme = (color: string) => {
    var colorThemeStyle = color == "dark" ? "/styles/color/light.css" : "/styles/color/dark.css";//From public folder

    if (typeof (window) !== "undefined") {
        const existingLink = document.getElementById("color-stylesheet") as HTMLLinkElement

        if (existingLink as HTMLLinkElement) {
            existingLink.href = colorThemeStyle;
        } else {
            const link = document.createElement("link");
            link.id = "color-stylesheet";
            link.rel = "stylesheet";
            link.href = colorThemeStyle;
            document.head.appendChild(link)
        }
        // setStyleLoaded(true)
    }
}

