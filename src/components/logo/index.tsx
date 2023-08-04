"use client"

import React, { Component } from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

import { useRecoilState } from "recoil";
import { mobileMenuState, mobileSearchState } from "@/states";


export default function Logo() {
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);
    const [searchVisible, setSearchVisible] = useRecoilState(mobileSearchState);

    const onClickFunc = () => {
        if (menuVisible) setMenuVisible(false);
        if (searchVisible) setSearchVisible(false);
    }

    return (
        <Link className={styles.logo} href="/" onClick={onClickFunc}>
            {/* <div>Tatsuma<br />Nakano</div> */}
            <h1 className="en">Tatsuma</h1>
            <h1 className="jp">竜磨</h1>
        </Link>
    )
}