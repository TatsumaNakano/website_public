"use client"
import styles from "../../../styles/layout.module.scss"

import { useRef, useEffect } from "react"
import { useRecoilState } from "recoil";
import { headerShrinkState, headerHeightState, messageViewState } from "@/states";
import { searchState } from "@/states"


function MainWrapper({ children }: { children: any }) {

    const [searchVisible, setSearchVisible] = useRecoilState(searchState);
    const [messageVisible, setMessageVisible] = useRecoilState(messageViewState);
    const [headerHeight, setHeaderHeightState] = useRecoilState(headerHeightState);

    const outFocusStyle = searchVisible || messageVisible ? styles.outFocus : styles.inFocus;

    return (
        <main className={`${styles.contents} ${outFocusStyle}`}>
            {children}
        </main>
    );
}

export default MainWrapper;