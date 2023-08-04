"use client"
import styles from "../../../styles/layout.module.scss"

import { useRecoilState } from "recoil";
import { headerShrinkState, headerHeightState } from "@/states";


function MainWrapper({ children }: { children: any }) {

    const [headerHeight, setHeaderHeightState] = useRecoilState(headerHeightState);
    return (
        <main className={styles.contents}>
            {children}
        </main>
    );
}

export default MainWrapper;