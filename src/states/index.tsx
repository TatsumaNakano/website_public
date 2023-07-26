"use client"
import { atom } from "recoil"

export const languageState = atom({
    key: "language",
    default: "en" //jp
})

export const initState = ({ set }: { set: any }) => {

    var lang = "";
    console.log(navigator.language)
    if (navigator.language.startsWith("en")) lang = "en";
    else if (navigator.language.startsWith("ja")) lang = "ja";
    else lang = "en";

    set(languageState, lang);

}