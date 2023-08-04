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


export const mobileMenuState = atom({
    key: "mobileMenu",
    default: false
})

export const mobileSearchState = atom({
    key: "mobileSearch",
    default: false
})


export const headerShrinkState = atom({
    key: "headerShrinkState",
    default: false
})

export const headerHeightState = atom({
    key: "headerHeightState",
    default: 0
})

export const allPosts = atom({
    key: "allPosts",
    default: null
})