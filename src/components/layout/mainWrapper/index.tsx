"use client"
import styles from "../../../styles/layout.module.scss"


import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer/page"

import { useRef, useEffect } from "react"
import { useRecoilState } from "recoil";
import { headerShrinkState, headerHeightState, messageViewState, siteLoaded } from "@/states";
import { searchState } from "@/states"

import { M_PLUS_1p } from 'next/font/google'

const inter = M_PLUS_1p({ weight: ["100", "300", "400", "500", "700", "800", "900"], subsets: ['latin'] })


function MainWrapper({ children }: { children: any }) {

    const [searchVisible, setSearchVisible] = useRecoilState(searchState);
    const [messageVisible, setMessageVisible] = useRecoilState(messageViewState);
    const [isSiteLoaded] = useRecoilState(siteLoaded);


    const outFocusStyle = searchVisible || messageVisible ? styles.outFocus : styles.inFocus;

    return (
        <body className={inter.className} style={{ opacity: 0 }}>
            <Header />
            <main className={`${styles.contents} ${outFocusStyle}`}>
                {children}
            </main>
            <Footer />
        </body>
    );
}

export default MainWrapper;