"use client"

import HeaderLink from "./headerLink";
import Logo from "@/components/logo";
import styles from "./styles.module.scss"
import { Suspense } from 'react'
import Link from "next/link";
import Widget from "../widget";
import MobileMenu from "../mobileMenu"


import { useRecoilState } from "recoil";
import React, { useEffect, useState, useRef } from 'react';
import { languageState, mobileMenuState } from "@/states";

import WorkIcon from "@/assets/icons/icon_home.svg"
import LabIcon from "@/assets/icons/icon_lab.svg"
import BlogIcon from "@/assets/icons/icon_blog.svg"
import AboutIcon from "@/assets/icons/icon_about.svg"
import MenuIcon from "@/assets/icons/icon_menu.svg"

import SearchIcon from "@/assets/icons/icon_search.svg"
import MsgIcon from "@/assets/icons/icon_message.svg"
import ThemeIcon from "@/assets/icons/icon_theme.svg"
import ENIcon from "@/assets/icons/icon_lang_EN.svg"
import JPIcon from "@/assets/icons/icon_lang_JP.svg"



const Header = function () {

    const [lang, setLang] = useRecoilState(languageState);
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);

    // const [height, setHeight] = useState(0);
    // const elementRef = useRef(null);

    // useEffect(() => {
    //     setHeight(elementRef.current.offsetHeight);
    // }, []);

    // const [color, setColor] = useRecoilState(colorThemeState);
    // const iconColor = color == "light" ? "white" : "black";

    var langIcon = <ENIcon />;
    langIcon = lang == "en" ? <ENIcon /> : <JPIcon />

    return (
        <header className={styles.header}>
            <Logo />
            <ul className={styles.desktop}>
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
            </ul>
            <ul className={styles.mobile}>
                <HeaderLink method={() => { setMenuVisible(true) }} name_en="Menu" name_jp="メニュー">
                    <MenuIcon />
                </HeaderLink>
            </ul>

        </header >
    );
}


export default Header;