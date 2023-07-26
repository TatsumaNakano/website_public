"use client"
import { languageState } from '@/states'
import { useRecoilState } from "recoil"

export default ({ lang }: { lang: string }) => {
    const style = getStyle(lang);
    console.log(style)
    return (
        <>
            <style jsx>{style}</style>
        </>
    );
}

const getStyle = (lang: string) => {

    const enStyle = `
        .jp{
            display:none;
        }
    `
    const jpStyle = `
        .en{
            display:none;
        }
    `

    if (lang === "en") return enStyle;
    else if (lang === "jp") return jpStyle;
    else return enStyle;
}