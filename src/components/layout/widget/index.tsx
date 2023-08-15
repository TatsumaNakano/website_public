"use client"

import styles from "./styles.module.scss"
import Icon_lang_EN from "../../../assets/icons/icon_lang_EN.svg"
import Icon_lang_JP from "../../../assets/icons/icon_lang_JP.svg"
import Icon_msg from "../../../assets/icons/icon_message.svg"
import Icon_search from "../../../assets/icons/icon_search.svg"
import Icon_switch from "../../../assets/icons/icon_theme.svg"
import Icon_Close from "../../../assets/icons/icon_close.svg"
import { useRecoilState } from "recoil"
import { useState, useEffect } from "react"
import { languageState, colorThemeState, searchState, messageViewState } from "@/states"

const Widget = function ({ forMobile = false, setHeaderHeight }: { forMobile?: boolean, setHeaderHeight: Function }) {
    const [lang, setLang] = useRecoilState(languageState);
    const [color, setColor] = useRecoilState(colorThemeState);
    const [searchVisible, setSearchVisible] = useRecoilState(searchState);
    const [messageVisible, setMessageVisible] = useRecoilState(messageViewState);
    // const [headerRefGlobal, setHeaderRefState] = useRecoilState(headerRefState);
    const [iconState, setIconState] = useState("");
    const iconColor = color == "light" ? "white" : "black";

    var langIcon = null;

    useEffect(() => {
        setIconState(lang);
    }, [lang])
    const style = forMobile ? styles.widgetMobile : styles.widget;

    // const onSearchButtonPress = () => {
    //     setMessageVisible(false);
    //     setSearchVisible(!searchVisible);
    //     setHeaderHeight();
    // }

    // const onLangPress = () => {
    //     // setLang(lang === "en" ? "ja" : "en")
    //     const path = window.location.pathname;
    //     if (lang == "en") {
    //         window.location.assign("https://en.tatsuma.co" + path);
    //         return;
    //     } else if (lang == "ja") {
    //         window.location.assign("https://ja.tatsuma.co" + path);
    //         return;
    //     }
    // }

    return (
        <>
            <div className={style}>
                <div className={styles.buttons}>
                    <ul>
                        {/* <li onClick={onSearchButtonPress}>{searchVisible ? <Icon_Close fill={iconColor} /> : <Icon_search fill={iconColor} />}</li> */}
                        <li onClick={() => { setLang(lang === "en" ? "ja" : "en") }}>{iconState === "ja" ? <Icon_lang_JP fill={iconColor} /> : <Icon_lang_EN fill={iconColor} />}</li>
                        {/* <li onClick={() => { setMessageVisible(!messageVisible); setHeaderHeight(); }}><Icon_msg fill={iconColor} /></li> */}
                        <li onClick={() => { setColor(color === "light" ? "dark" : "light") }}><Icon_switch fill={iconColor} /></li>
                    </ul>
                </div>
                {/* <div className={styles.options}></div> */}

            </div >

        </>
    );
}

export default Widget;
