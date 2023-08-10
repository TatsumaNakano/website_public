"use client"

import styles from "./styles.module.scss"
import Icon_lang_EN from "../../../assets/icons/icon_lang_EN.svg"
import Icon_lang_JP from "../../../assets/icons/icon_lang_JP.svg"
import Icon_msg from "../../../assets/icons/icon_message.svg"
import Icon_search from "../../../assets/icons/icon_search.svg"
import Icon_switch from "../../../assets/icons/icon_theme.svg"
import { useRecoilState } from "recoil"
import { languageState, colorThemeState, searchState, messageViewState } from "@/states"

const Widget = function ({ forMobile = false, setHeaderHeight }: { forMobile?: boolean, setHeaderHeight: Function }) {
    const [lang, setLang] = useRecoilState(languageState);
    const [color, setColor] = useRecoilState(colorThemeState);
    const [searchVisible, setSearchVisible] = useRecoilState(searchState);
    const [messageVisible, setMessageVisible] = useRecoilState(messageViewState);
    // const [headerRefGlobal, setHeaderRefState] = useRecoilState(headerRefState);
    const iconColor = color == "light" ? "white" : "black";

    var langIcon = null;
    langIcon = lang == "ja" ? <Icon_lang_JP fill={iconColor} /> : <Icon_lang_EN fill={iconColor} />

    const style = forMobile ? styles.widgetMobile : styles.widget;

    const onSearchButtonPress = () => {
        setMessageVisible(false);
        setSearchVisible(!searchVisible);
        setHeaderHeight();
    }
    return (
        <>
            <div className={style}>
                <div className={styles.buttons}>
                    <ul>
                        <li onClick={onSearchButtonPress}><Icon_search fill={iconColor} /></li>
                        <li onClick={() => { setLang(lang === "en" ? "ja" : "en") }}>{langIcon}</li>
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
