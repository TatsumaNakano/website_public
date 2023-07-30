"use client"

import styles from "./styles.module.scss"

import Icon_lang_EN from "../../../assets/icons/icon_lang_EN.svg"
import Icon_lang_JP from "../../../assets/icons/icon_lang_JP.svg"
import Icon_msg from "../../../assets/icons/icon_message.svg"
import Icon_search from "../../../assets/icons/icon_search.svg"
import Icon_switch from "../../../assets/icons/icon_switch_theme.svg"
import { useRecoilState } from "recoil"
import { languageState, colorThemeState } from "@/states"

export default () => {
    const [lang, setLang] = useRecoilState(languageState);
    const [color, setColor] = useRecoilState(colorThemeState);

    const iconColor = color == "light" ? "white" : "black";

    const langIcon = lang == "en" ? <Icon_lang_EN fill={iconColor} /> : <Icon_lang_JP fill={iconColor} />
    return (
        <div className={styles.widget}>
            <div className={styles.buttons}>
                <ul>
                    <li onClick={() => setLanguage(lang, setLang)}>{langIcon}</li>
                    <li ><Icon_search fill={iconColor} /></li>
                    <li><Icon_msg fill={iconColor} /></li>
                    <li onClick={() => setColorTheme(color, setColor)}><Icon_switch fill={iconColor} /></li>
                </ul>
            </div>
            {/* <div className={styles.options}></div> */}
        </div >
    );
}

const setLanguage = (lang: string, setLang: any) => {
    if (lang.startsWith("en")) setLang("jp");
    else if (lang.startsWith("jp")) setLang("en");
}

const setColorTheme = (color: string, setColor: any) => {
    if (color == "dark") setColor("light");
    else if (color == "light") setColor("dark");
}