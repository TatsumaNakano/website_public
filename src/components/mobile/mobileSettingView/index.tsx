"use client"
import styles from "./styles.module.scss";
import LinkItem from "../../layout/header/linkItem"
import Link from "next/link";

import ENIcon from "@/assets/icons/icon_lang_EN.svg"
import JPIcon from "@/assets/icons/icon_lang_JP.svg"
import ThemeIcon from "@/assets/icons/icon_theme.svg"

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { languageState, colorThemeState, mobileMenuState, searchState } from "@/states";


const MobileSettingView = () => {

    const [lang, setLanguageState] = useRecoilState(languageState);
    const [color, setColorThemeState] = useRecoilState(colorThemeState);
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);
    const [searchVisible, setSearchVisible] = useRecoilState(searchState);


    const menuOpenStyle = menuVisible ? styles.show : styles.hide;
    const themeMessage = {
        en: color == "light" ? "Switch to Light Mode" : "Switch to Dark Mode",
        jp: color == "light" ? "ライトモードに切り替え" : "ダークモードに切り替え"
    }

    const closeMobileMenus = () => {
        setMenuVisible(false);
        // setSearchVisible(false);
    }

    useEffect(() => {
        if (typeof (window) !== undefined) {
            window.addEventListener("resize", closeMobileMenus);
            document.addEventListener("scroll", closeMobileMenus);
            return () => {
                window.removeEventListener("resize", closeMobileMenus);
                document.removeEventListener("scroll", closeMobileMenus);
            }
        }
    }, [])


    return (
        <div className={`${styles.mobileSettingView} ${menuOpenStyle}`}>
            <label className="en">Language</label>
            <label className="jp">言語</label>
            <ul className={styles.lang}>
                <MobileSettingViewLink name_en="English" name_jp="English" method={() => { setLanguageState("en"); setMenuVisible(false); }}>
                    <ENIcon />
                </MobileSettingViewLink>
                <MobileSettingViewLink name_en="日本語" name_jp="日本語" method={() => { setLanguageState("jp"); setMenuVisible(false); }}>
                    <JPIcon />
                </MobileSettingViewLink>
            </ul>
            <label className="en">Theme</label>
            <label className="jp">テーマ</label>
            <ul className={styles.colorTheme}>
                <MobileSettingViewLink name_en={themeMessage.en} name_jp={themeMessage.jp} method={() => { setColorThemeState(color == "light" ? "dark" : "light"); setMenuVisible(false); }}>
                    <ThemeIcon />
                </MobileSettingViewLink>
            </ul>

            {/* <div className={styles.bar}></div> */}
        </div>
    );
}

function MobileSettingViewLink({ children, name_en, name_jp, method }:
    { children: JSX.Element, name_en: string, name_jp: string, method: Function }) {
    return (
        <li className={styles.mobileSettingVeiwLink}>

            <a onClick={() => { method() }}>
                <div>{children}</div>
                <span className='en'>{name_en}</span>
                <span className='jp'>{name_jp}</span>
            </a>

        </li>
    );
}

export default MobileSettingView;