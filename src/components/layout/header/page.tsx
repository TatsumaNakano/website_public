"use client"

import HeaderLink from "./headerLink/pages";
import Logo from "@/components/logo/page";
import styles from "./styles.module.scss"
import { Suspense } from 'react'
import Link from "next/link";
import Widget from "../widget/page";

import { useRecoilState } from "recoil";
import { languageState, colorThemeState } from "@/states";

import WorkIcon from "@/assets/icons/icon_home.svg"
import LabIcon from "@/assets/icons/icon_lab.svg"
import BlogIcon from "@/assets/icons/icon_blog.svg"
import AboutIcon from "@/assets/icons/icon_about.svg"

import SearchIcon from "@/assets/icons/icon_search.svg"
import MsgIcon from "@/assets/icons/icon_message.svg"
import SwitchIcon from "@/assets/icons/icon_switch.svg"
import ENIcon from "@/assets/icons/icon_lang_EN.svg"
import JPIcon from "@/assets/icons/icon_lang_JP.svg"

const Header = function () {

    const [lang, setLang] = useRecoilState(languageState);
    // const [color, setColor] = useRecoilState(colorThemeState);
    // const iconColor = color == "light" ? "white" : "black";

    var langIcon = <ENIcon />;
    langIcon = lang == "en" ? <ENIcon /> : <JPIcon />


    return (
        <header className={styles.header}>
            {/* <Suspense fallback={<p>Loading</p>}> */}
            <Logo />
            <ul>
                <HeaderLink href="/" name_en="Work" name_jp="過去の案件">
                    <WorkIcon />
                </HeaderLink>
                <HeaderLink href="/lab" name_en="Lab" name_jp="個人制作">
                    <LabIcon />
                </HeaderLink>
                <HeaderLink href="/blog" name_en="Blog" name_jp="ブログ">
                    <BlogIcon />
                </HeaderLink>
                <HeaderLink href="/about" name_en="About" name_jp="あなたはだあれ">
                    <AboutIcon />
                </HeaderLink>
                {/* <HeaderLink name_en="Language" name_jp="言語">
                    {langIcon}
                </HeaderLink>
                <HeaderLink name_en="Search" name_jp="サイト内検索">
                    <SearchIcon fill={iconColor} />
                </HeaderLink>
                <HeaderLink name_en="Contact" name_jp="ご依頼">
                    <MsgIcon fill={iconColor} />
                </HeaderLink>
                <HeaderLink name_en="Theme" name_jp="カラーテーマ">
                    <SwitchIcon fill={iconColor} />
                </HeaderLink> */}
            </ul>

            {/* <ul>
                <li onClick={() => { setLang(lang == "en" ? "jp" : "en") }}>{langIcon}</li>
                <li ><SearchIcon fill={iconColor} /></li>
                <li><MsgIcon fill={iconColor} /></li>
                <li onClick={() => { setColor(color == "dark" ? "light" : "dark") }}><SwitchIcon fill={iconColor} /></li>
            </ul> */}

            {/* </Suspense> */}
        </header >
    );
}

// const setLanguage = (lang: string, setLang: any) => {
//     if (lang.startsWith("en")) setLang("ja");
//     else if (lang.startsWith("ja")) setLang("en");
// }

// const setColorTheme = (color: string, setColor: any) => {
//     if (color == "dark") setColor("light");
//     else if (color == "light") setColor("dark");
// }

export default Header;