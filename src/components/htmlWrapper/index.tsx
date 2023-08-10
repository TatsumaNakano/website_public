"use client"
import { languageState, colorThemeState } from '@/states'
import { useRecoilState } from "recoil"
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