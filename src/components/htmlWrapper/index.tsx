"use client"
import { languageState } from '@/states'
import { useRecoilState } from "recoil"
import Theme from "@/components/theme"
export default ({
    children,
}: {
    children: React.ReactNode
}) => {

    const [lang, setLang] = useRecoilState(languageState)


    return (
        <html lang={lang}>
            <Theme lang={lang} />
            {children}
        </html>
    );
}

