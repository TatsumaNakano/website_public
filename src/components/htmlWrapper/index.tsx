"use client"
import { languageState, colorThemeState } from '@/states'
import { useRecoilState } from "recoil"
import { useLayoutEffect } from "react"
import LangTheme from "@/components/langtheme"
import ColorTheme from '../colorTheme'
import HighlightTheme from '@/components/highlightTheme'


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
        </html>
    );
}

export default HtmlWrapper;