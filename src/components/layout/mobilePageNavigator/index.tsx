"use client"

import { useEffect, useRef } from "react"

import styles from "./styles.module.scss"

import HeaderLink from "../header/linkItem";

import WorkIcon from "@/assets/icons/icon_home.svg"
import LabIcon from "@/assets/icons/icon_lab.svg"
import BlogIcon from "@/assets/icons/icon_blog.svg"
import AboutIcon from "@/assets/icons/icon_about.svg"
import SettingIcon from "@/assets/icons/icon_setting.svg"
import MsgIcon from "@/assets/icons/icon_message.svg"


import { useRecoilState } from "recoil";
// import React, { useEffect, useState, useRef } from 'react';
import { languageState, mobileMenuState } from "@/states";


const MobilePageBar = function () {

    const thisElement = useRef(null);

    const clickEvent = () => {

    }

    useEffect(() => {

    }, [])
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);


    return (
        <div className={styles.mobilePageNavigator} ref={thisElement} >
            <ul>
                <HeaderLink href="/" name_en="Work" name_jp="過去の案件" forMobileMenuIcon={true}>
                    <WorkIcon />
                </HeaderLink>
                <HeaderLink href="/lab" name_en="Lab" name_jp="個人制作" forMobileMenuIcon={true}>
                    <LabIcon />
                </HeaderLink>
                <HeaderLink href="/blog" name_en="Blog" name_jp="ブログ" forMobileMenuIcon={true}>
                    <BlogIcon />
                </HeaderLink>
                <HeaderLink href="/about" name_en="About" name_jp="あなたはだあれ" forMobileMenuIcon={true}>
                    <AboutIcon />
                </HeaderLink>
                <HeaderLink name_en="Blog" name_jp="ブログ" forMobileMenuIcon={true}>
                    <MsgIcon />
                </HeaderLink>
                {/* <HeaderLink method={() => { setMenuVisible(true) }} name_en="Setting" name_jp="設定" forMobileMenuIcon={true}>
                    <SettingIcon />
                </HeaderLink> */}

            </ul>
            {/* <Widget forMobile={true} /> */}
        </div>
    )
    // } else {
    //     return <></>;
    // }
}

export default MobilePageBar;