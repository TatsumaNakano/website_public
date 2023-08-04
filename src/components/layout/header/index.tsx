"use client"

import HeaderLink from "./linkItem";
import Logo from "@/components/logo";
import styles from "./styles.module.scss"
import { Suspense } from 'react'
import Link from "next/link";
import Widget from "../widget";
import MobileMenu from "../mobilePageNavigator"

import { useRecoilState } from "recoil";
import React, { useEffect, useState, useRef } from 'react';
import { languageState, mobileMenuState, headerShrinkState, headerHeightState } from "@/states";

import WorkIcon from "@/assets/icons/icon_home.svg"
import LabIcon from "@/assets/icons/icon_lab.svg"
import BlogIcon from "@/assets/icons/icon_blog.svg"
import AboutIcon from "@/assets/icons/icon_about.svg"
import MenuIcon from "@/assets/icons/icon_menu.svg"
import SettingIcon from "@/assets/icons/icon_setting.svg"

import SearchIcon from "@/assets/icons/icon_search.svg"
import MsgIcon from "@/assets/icons/icon_message.svg"
import ThemeIcon from "@/assets/icons/icon_theme.svg"
import ENIcon from "@/assets/icons/icon_lang_EN.svg"
import JPIcon from "@/assets/icons/icon_lang_JP.svg"

import MobileSettingView from '@/components/mobileSettingView'


const Header = function () {

    const [lang, setLang] = useRecoilState(languageState);
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);
    const [headerShrink, setHeaderShrinkState] = useRecoilState(headerShrinkState);
    const [headerHeight, setHeaderHeightState] = useRecoilState(headerHeightState);
    const headerRef = useRef<any>(null);

    const getScroll = () => {
        setHeaderShrinkState(window.scrollY > 80);
    };

    const getHeight = () => {
        setHeaderHeightState(headerRef.current.offsetHeight);
    }


    useEffect(() => {

        getHeight();
        getScroll();
        if (headerRef.current != null) {
            document.addEventListener("scroll", () => { getScroll(); });
            window.addEventListener("resize", getHeight);
        }

        return () => {
            document.removeEventListener("scroll", () => { getScroll(); });
            window.removeEventListener("resize", getHeight);
        };
    }, [])


    var langIcon = <ENIcon />;
    langIcon = lang == "en" ? <ENIcon /> : <JPIcon />

    const headerStyle = headerShrink ? styles.shrink : styles.wide;

    return (
        <header className={styles.header}>
            <div>
                <div className={`${styles.navigation} ${headerStyle}`} ref={headerRef}>
                    <div>
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

                            <HeaderLink method={() => setMenuVisible(!menuVisible)} name_en="Setting" name_jp="設定">
                                <SettingIcon />
                            </HeaderLink>
                            <HeaderLink method={openSearch} name_en="Search" name_jp="サイト内検索">
                                <SearchIcon />
                            </HeaderLink>

                        </ul>
                    </div>
                </div>
                <MobileSettingView />
            </div>
        </header >
    );
}

const openSetting = () => {

}

const openSearch = () => {

}

export default Header;