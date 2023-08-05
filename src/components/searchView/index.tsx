"use client"

import SearchBase from "@/components/searchBase";
import styles from "./styles.module.scss";
import LinkItem from "../layout/header/linkItem";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { headerHeightState, searchState, mobilePageNavigatorHeight } from "@/states";
import { useRef, useState, useEffect } from "react";
import breakpoints from "@/utility/breakpoints";

const SearchView = () => {

    const [searchVisible, setSearchVisible] = useRecoilState(searchState);
    const [headerHeight, setHeaderHeight] = useRecoilState(headerHeightState);
    const [mpnHeight, setMpnHeight] = useRecoilState(mobilePageNavigatorHeight);

    const menuOpenStyle = searchVisible ? styles.show : styles.hide;

    const ref = useRef<any>(null);
    var [windowHeight, setWindowHeight] = useState<number>(0);

    const register = () => {
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        if (!ref?.current) return;
        register();
        window.addEventListener("resize", register);
        return window.removeEventListener("resize", register)
    }, [])

    useEffect(() => {
        //Disable scroll on search bar open
        document.body.style.overflow = searchVisible ? "hidden" : "scroll";
    }, [searchVisible])

    const isMobileLayout = (breakpoints.tabletWide > window.innerWidth);
    const mpnAdjustment = isMobileLayout ? (mpnHeight ? mpnHeight : 0) : 0;
    const height = windowHeight - headerHeight - mpnAdjustment;
    const searchStyle = { height: `${height}px`, marginTop: `${headerHeight}px` }

    return (
        <div className={`${styles.searchView} ${menuOpenStyle}`} style={searchStyle} ref={ref}>
            <SearchBase />
        </div>
    );
}

export default SearchView;