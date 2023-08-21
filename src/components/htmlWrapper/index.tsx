"use client"
import { languageState, colorThemeState } from '@/states'
import { useRecoilState } from "recoil"
import { useLayoutEffect } from "react"
import LangTheme from "@/components/langtheme"
import ColorTheme from '../colorTheme'
import HighlightTheme from '@/components/highlightTheme'
import Script from 'next/script'


const HtmlWrapper = function ({
    children,
}: {
    children: React.ReactNode
}) {

    const [lang] = useRecoilState(languageState);
    const [color] = useRecoilState(colorThemeState);

    // useLayoutEffect(() => {
    //     const langElemsToDelete = document.querySelectorAll(lang == "ja" ? ".en" : ".jp");
    //     langElemsToDelete.forEach(elem => {
    //         elem.innerHTML = "";
    //     })
    // }, [lang])


    return (
        <html lang={lang}>
            <LangTheme />
            <ColorTheme />
            <HighlightTheme />
            {children}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z68WBJ5W90"></Script>
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-Z68WBJ5W90');
                `}
            </Script>
            <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9817111574699036"
                crossOrigin="anonymous"></Script>
        </html>
    );
}

export default HtmlWrapper;