"use client"
import { redirect } from "next/navigation";
import { atom } from "recoil"
// import { useRouter } from "next/router";

export const languageState = atom({
    key: "language",
    default: "en", //ja,
})

export const initState = ({ set }: { set: any }) => {

    var lang = "ja";
    if (typeof window !== 'undefined') {

        if (window.location.host.startsWith("ja") || window.location.host.startsWith("jp")) {
            set(languageState, "ja");
            return;
        } else if (window.location.host.startsWith("en")) {
            set(languageState, "en");
            return;
        } else if (window.location.host.startsWith("localhost")) {
            if (navigator.language.startsWith("en")) {
                set(languageState, "en");
            } else if (navigator.language.startsWith("ja")) {
                set(languageState, "ja");
            }
            return;
        } else {
            const path = window.location.pathname;
            if (navigator.language.startsWith("en")) {
                window.location.assign("https://en.tatsuma.co" + path);
                return;
            } else if (navigator.language.startsWith("ja")) {
                window.location.assign("https://ja.tatsuma.co" + path);
                return;
            }

            return;
        }

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

export const searchState = atom({
    key: "searchSearch",
    default: false
})

export const messageViewState = atom({
    key: "messageViewState",
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

export const mobilePageNavigatorHeight = atom({
    key: "mobilePageNavigatorHeight",
    default: null
})

export const siteLoaded = atom({
    key: "siteLoaded",
    default: false
})
