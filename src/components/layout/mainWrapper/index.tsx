"use client"
import styles from "../../../styles/layout.module.scss"

import { useRecoilState } from "recoil";
import { headerShrinkState, headerHeightState } from "@/states";


function MainWrapper({ children }: { children: any }) {

    // const [headerShrink, setHeaderShrinkState] = useRecoilState(headerShrinkState);
    const [headerHeight, setHeaderHeightState] = useRecoilState(headerHeightState);

    return (
        <main className={styles.contents} style={{ paddingTop: headerHeight + (10 * Math.pow(1.618, 2)) + "px" }}>
            {children}
        </main>
    );
}

export default MainWrapper;