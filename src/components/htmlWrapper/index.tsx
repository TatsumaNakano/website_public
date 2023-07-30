"use client"
import { languageState, colorThemeState } from '@/states'
import { useRecoilState } from "recoil"
import LangTheme from "@/components/langtheme"
import ColorTheme from '../colorTheme'
export default ({
    children,
}: {
    children: React.ReactNode
}) => {

    const [lang] = useRecoilState(languageState);

    return (
        <html lang={lang}>
            <LangTheme />
            <ColorTheme />
            {children}
        </html>
    );
}

