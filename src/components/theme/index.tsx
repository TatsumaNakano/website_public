"use client"
import { languageState } from '@/states'
import { dirname } from 'path'
import { useEffect, useState } from 'react'
import { useRecoilState } from "recoil"
// import { usePathname } from "next/navigation"

export default ({ lang }: { lang: string }) => {

    useEffect(() => {

        const langStyle = lang == "en" ? "/styles/en.css" : "/styles/jp.css";//From public folder
        const existingLink = document.getElementById("lang-stylesheet")

        if (existingLink) {
            existingLink.href = langStyle;
        } else {
            const link = document.createElement("link");
            link.id = "lang-stylesheet";
            link.rel = "stylesheet";
            link.href = langStyle;
            document.head.appendChild(link)
        }

    }, [lang])

    return (
        <></>
    );
}

// const getStyle = (lang: string) => {

//     const enStyle = `
//         .jp{
//             display:none;
//         }
//     `
//     const jpStyle = `
//         .en{
//             display:none;
//         }
//     `

//     if (lang === "en") return enStyle;
//     else if (lang === "jp") return jpStyle;
//     else return enStyle;
// }