"use client"

import { useEffect, useRef } from "react"

import styles from "./styles.module.scss"

import HeaderLink from "../../layout/header/linkItem";

import WorkIcon from "@/assets/icons/icon_home.svg"
import LabIcon from "@/assets/icons/icon_lab.svg"
import BlogIcon from "@/assets/icons/icon_blog.svg"
import AboutIcon from "@/assets/icons/icon_about.svg"
import SettingIcon from "@/assets/icons/icon_setting.svg"
import MsgIcon from "@/assets/icons/icon_message.svg"


import { useRecoilState } from "recoil";
import { mobilePageNavigatorHeight, messageViewState } from "@/states";


const MobilePageBar = function ({ setHeaderHeight }: { setHeaderHeight: Function }) {
    const ref = useRef<any>(null);
    const [mpnHeight, setMpnHeight] = useRecoilState(mobilePageNavigatorHeight);
    const [messageVisible, setMessageVisible] = useRecoilState(messageViewState);

    useEffect(() => {
        if (!ref?.current) return;
        setMpnHeight(ref.current.offsetHeight);
    }, [])



    return (
        <div className={styles.mobilePageNavigator} ref={ref}>
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
                <HeaderLink method={() => { setMessageVisible(!messageVisible); setHeaderHeight(); }} name_en="Message" name_jp="お問い合わせ" forMobileMenuIcon={true}>
                    <MsgIcon />
                </HeaderLink>
            </ul>
        </div>
    )
    // } else {
    //     return <></>;
    // }
}

export default MobilePageBar;