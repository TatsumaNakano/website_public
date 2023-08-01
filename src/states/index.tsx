// "use client"
import { atom } from "recoil"
// import { useRouter } from "next/router";

export const languageState = atom({
    key: "language",
    default: "en" //jp
})

export const initState = ({ set }: { set: any }) => {
    var lang = "en";
    set(languageState, lang);
}


export const colorThemeState = atom({
    key: "colorTheme",
    default: "light" //light
})  