"use client"
import { atom } from "recoil"
// import { useRouter } from "next/router";

export const languageState = atom({
    key: "language",
    default: "en" //ja
})

export const initState = ({ set }: { set: any }) => {

    var lang = "ja";
    if (typeof window !== 'undefined') {
        if (navigator.language.startsWith("en")) {
            lang = "en";
        } else if (navigator.language.startsWith("ja")) {
            lang = "ja";
        }

        set(languageState, lang);
    }


}


export const colorThemeState = atom({
    key: "colorTheme",
    default: "light" //light
})  