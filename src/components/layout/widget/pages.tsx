"use client"

import styles from "./styles.module.scss"

import Icon_lang_EN from "../../../assets/icons/icon_lang_EN.svg"
import Icon_lang_JP from "../../../assets/icons/icon_lang_JP.svg"
import Icon_msg from "../../../assets/icons/icon_message.svg"
import Icon_search from "../../../assets/icons/icon_search.svg"
import Icon_switch from "../../../assets/icons/icon_switch_theme.svg"
import { useRecoilState } from "recoil"
import { languageState } from "@/states"

export default () => {
    const [lang, setLang] = useRecoilState(languageState)
    return (
        <div className={styles.widget}>
            <div className={styles.buttons}>
                <ul>
                    <li onClick={() => setLanguage(lang, setLang)}><Icon_lang_EN /></li>
                    <li><Icon_search /></li>
                    <li><Icon_msg /></li>
                    <li><Icon_switch /></li>
                </ul>
            </div>
            {/* <div className={styles.options}></div> */}
        </div>
    );
}

const setLanguage = (lang: string, setLang: any) => {
    if (lang.startsWith("en")) setLang("jp")
    if (lang.startsWith("jp")) setLang("en")
}