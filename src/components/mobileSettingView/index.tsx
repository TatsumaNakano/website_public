"use client"
import styles from "./styles.module.scss";
import LinkItem from "../layout/header/linkItem"
import Link from "next/link";

import ENIcon from "@/assets/icons/icon_lang_EN.svg"
import JPIcon from "@/assets/icons/icon_lang_JP.svg"
import ThemeIcon from "@/assets/icons/icon_theme.svg"

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { languageState, colorThemeState, mobileMenuState } from "@/states";


const MobileSettingView = () => {

    const [lang, setLanguageState] = useRecoilState(languageState);
    const [color, setColorThemeState] = useRecoilState(colorThemeState);
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);
    const menuOpenStyle = menuVisible ? styles.show : styles.hide;
    const themeMessage = {
        en: color === "light" ? "Switch to Dark Mode" : "Switch to Light Mode",
        jp: color === "light" ? "ダークモードに切り替え" : "ライトモードに切り替え"
    }

    useEffect(() => {
        window.addEventListener("resize", () => setMenuVisible(false));
        document.addEventListener("scroll", () => setMenuVisible(false));
        return () => {
            window.removeEventListener("resize", () => setMenuVisible(false));
            document.removeEventListener("scroll", () => setMenuVisible(false));
        }
    }, [])


    return (
        <div className={`${styles.mobileSettingView} ${menuOpenStyle}`}>
            <label className="en">Language</label>
            <label className="jp">言語</label>
            <ul className={styles.lang}>
                <MobileSettingViewLink href="/" name_en="English" name_jp="English" method={() => { setLanguageState("en"); setMenuVisible(false); }}>
                    <ENIcon />
                </MobileSettingViewLink>
                <MobileSettingViewLink href="/" name_en="日本語" name_jp="日本語" method={() => { setLanguageState("jp"); setMenuVisible(false); }}>
                    <JPIcon />
                </MobileSettingViewLink>
            </ul>
            <label className="en">Theme</label>
            <label className="jp">テーマ</label>
            <ul className={styles.colorTheme}>
                <MobileSettingViewLink href="/" name_en={themeMessage.en} name_jp={themeMessage.jp} method={() => { setColorThemeState(color == "light" ? "dark" : "light"); setMenuVisible(false); }}>
                    <ThemeIcon />
                </MobileSettingViewLink>
            </ul>

            {/* <div className={styles.bar}></div> */}
        </div>
    );
}

function MobileSettingViewLink({ children, href, name_en, name_jp, method }:
    { children: JSX.Element, href: string, name_en: string, name_jp: string, method: Function }) {
    return (
        <li className={styles.mobileSettingVeiwLink}>

            <Link onClick={() => { method() }} href={href}>
                <div>{children}</div>
                <span className='en'>{name_en}</span>
                <span className='jp'>{name_jp}</span>
            </Link>

        </li>
    );
}

export default MobileSettingView;