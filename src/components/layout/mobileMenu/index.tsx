"use client"

import styles from "./styles.module.scss"

import HeaderLink from "../header/headerLink";
import Widget from "../widget";


import WorkIcon from "@/assets/icons/icon_home.svg"
import LabIcon from "@/assets/icons/icon_lab.svg"
import BlogIcon from "@/assets/icons/icon_blog.svg"
import AboutIcon from "@/assets/icons/icon_about.svg"


import { useRecoilState } from "recoil";
import React, { useEffect, useState, useRef } from 'react';
import { languageState, mobileMenuState } from "@/states";


const MobileMenu = function () {

    // const [height, setHeight] = useState(0);
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);
    const closeMenu = () => { setMenuVisible(false) };

    if (menuVisible) {
        return (
            <div className={styles.mobileMenu} >
                <ul>
                    <HeaderLink href="/" method={closeMenu} name_en="Work" name_jp="過去の案件" forMobileMenuIcon={true}>
                        <WorkIcon />
                    </HeaderLink>
                    <HeaderLink href="/lab" method={closeMenu} name_en="Lab" name_jp="個人制作" forMobileMenuIcon={true}>
                        <LabIcon />
                    </HeaderLink>
                    <HeaderLink href="/blog" method={closeMenu} name_en="Blog" name_jp="ブログ" forMobileMenuIcon={true}>
                        <BlogIcon />
                    </HeaderLink>
                    <HeaderLink href="/about" method={closeMenu} name_en="About" name_jp="あなたはだあれ" forMobileMenuIcon={true}>
                        <AboutIcon />
                    </HeaderLink>

                </ul>
                <Widget forMobile={true} />
            </div>
        )
    } else {
        return <></>;
    }
}

export default MobileMenu;