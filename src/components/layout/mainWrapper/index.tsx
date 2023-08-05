"use client"
import styles from "../../../styles/layout.module.scss"

import { useRecoilState } from "recoil";
import { headerShrinkState, headerHeightState } from "@/states";
import { searchState } from "@/states"


function MainWrapper({ children }: { children: any }) {
    // const [dsbState, setDesktopSearchBoxState] = useRecoilState(desktopSearchBoxState);
    const [searchVisible, setSearchVisible] = useRecoilState(searchState);
    const [headerHeight, setHeaderHeightState] = useRecoilState(headerHeightState);

    const outFocusStyle = searchVisible ? styles.outFocus : styles.inFocus;

    return (
        <main className={`${styles.contents} ${outFocusStyle}`}>
            {children}
        </main>
    );
}

export default MainWrapper;