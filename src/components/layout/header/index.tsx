"use client"

import HeaderLink from "./linkItem";
import Logo from "@/components/logo";
import styles from "./styles.module.scss"
import { Suspense } from 'react'
import Link from "next/link";
import Widget from "../widget";
import MobileMenu from "../../mobile/mobilePageNavigator"
import MobilePageBar from "../../mobile/mobilePageNavigator";

import { useRecoilState } from "recoil";
import React, { useEffect, useState, useRef } from 'react';
import { languageState, mobileMenuState, headerShrinkState, headerHeightState, searchState } from "@/states";

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

import MobileSettingView from '@/components/mobile/mobileSettingView'
import SearchView from '@/components/searchView'
import Message from "@/components/message";


const Header = function () {

    const [lang, setLang] = useRecoilState(languageState);
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);
    const [headerShrink, setHeaderShrinkState] = useRecoilState(headerShrinkState);
    const [headerHeight, setHeaderHeightState] = useRecoilState(headerHeightState);
    const [searchVisible, setSearchVisible] = useRecoilState(searchState);

    const headerRef = useRef<any>(null);

    const setScroll = () => {
        const shouldShrink = (typeof (window) !== undefined) ? window.scrollY > 80 : false;
        setHeaderShrinkState(shouldShrink);
    };

    const setHeight = () => {
        setHeaderHeightState(headerRef.current.offsetHeight);
    }

    useEffect(() => {

        setHeight();
        setScroll();

        if (typeof (window) !== undefined) {

            if (headerRef.current != null) {
                document.addEventListener("scroll", () => { setScroll(); });
                window.addEventListener("resize", () => { setHeight(); });
            }

            return () => {
                document.removeEventListener("scroll", () => { setScroll(); });
                window.removeEventListener("resize", () => { setHeight(); });
            };
        }
    }, [])

    useEffect(() => {
        if (!headerShrink) setScroll();
    }, [headerShrink])

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
                            <HeaderLink href="/" name_en="Work" name_jp="実績">
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

                            <HeaderLink method={() => { setMenuVisible(!menuVisible); }} name_en="Setting" name_jp="設定">
                                <SettingIcon />
                            </HeaderLink>
                            <HeaderLink method={() => { setSearchVisible(!searchVisible); setHeight(); }} name_en="Search" name_jp="サイト内検索">
                                <SearchIcon />
                            </HeaderLink>

                        </ul>
                    </div>
                </div>
                <MobileSettingView />
                <SearchView />
                <Message />
            </div>
            <Widget setHeaderHeight={setHeight} />
            <MobilePageBar setHeaderHeight={setHeight} />
        </header >
    );
}


export default Header;