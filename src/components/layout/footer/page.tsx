"use client"

import styles from "./styles.module.scss"
import Artstation from "../../../assets/sns_icon/sns_icon_artstation.svg";
import Github from "../../../assets/sns_icon/sns_icon_github.svg";
import Linkedin from "../../../assets/sns_icon/sns_icon_linkedin.svg";

import { useRecoilState } from "recoil";
import { colorThemeState } from "@/states";

export default function Footer() {

    const [color, setColor] = useRecoilState(colorThemeState);
    const iconColor = color == "light" ? "white" : "black";

    return (
        <div className={styles.footer}>
            <ul>
                {/* //ArtStaion */}
                <li><a href="https://www.artstation.com/tatumanakano" target="_blank"><Artstation fill={iconColor} /></a></li>
                {/* Github */}
                <li><a href="https://github.com/TatsumaNakano" target="_blank"><Github fill={iconColor} /></a></li>
                {/* LinkedIn */}
                <li><a href="https://www.linkedin.com/in/tatsuma-nakano-45aa73a4/" target="_blank"><Linkedin fill={iconColor} /></a></li>
                {/* <li><a>HuggingFace</a></li> */}
            </ul>
            {/* <label>All rights reserved</label> */}
            <div className={styles.quote}>
                <p>Don&#39;t think about making art, just get it done.</p>
                <p>Let everyone else decide if it&#39;s good or bad, whether they love it or hate it. </p>
                <p>While they are deciding, make even more art.</p>
                <label>- Andy Warhol -</label>
            </div>
        </div>
    );
}