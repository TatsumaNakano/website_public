"use client"

import SearchBase from "@/components/searchBase";
import styles from "./styles.module.scss";
import LinkItem from "../../layout/header/linkItem";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { headerHeightState, mobileSearchState } from "@/states";
import { useRef, useState, useEffect } from "react";

const MobileSearchView = () => {

    const [searchVisible, setSearchVisible] = useRecoilState(mobileSearchState);
    const [headerHeight, setHeaderHeight] = useRecoilState(headerHeightState);
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


    return (
        <div className={`${styles.mobileSearchView} ${menuOpenStyle}`} style={{ height: `${windowHeight - headerHeight}px`, marginTop: `${headerHeight}px` }} ref={ref}>
            <SearchBase />
        </div>
    );
}

export default MobileSearchView;