"use client"

import Link from 'next/link'
import React, { Component } from 'react'
import styles from "./styles.module.scss"
// import { useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { mobileMenuState, searchState, messageViewState } from "@/states";
import CloseIcon from "@/assets/icons/icon_close.svg"
import { usePathname } from 'next/navigation'


interface LinkProps {
    href?: string,
    method?: Function,
    forMobileMenuIcon?: boolean,
    name_en: string,
    name_jp: string,
    children: any,
    isMsg?: boolean,
    isSearch?: boolean,
    isSetting?: boolean
}

const LinkItem = function ({ href, method = () => { }, forMobileMenuIcon = false, name_en, name_jp, children, isMsg = false, isSearch = false, isSetting = false }: LinkProps) {

    // const router = useSearchParams();
    // console.log(router)
    const [menuVisible, setMenuVisible] = useRecoilState(mobileMenuState);
    const [searchVisible, setSearchVisible] = useRecoilState(searchState);
    const [messageVisible, setMessageVisible] = useRecoilState(messageViewState);

    const onClickFunc = () => {
        method();
        if (menuVisible) setMenuVisible(false);
        if (searchVisible) setSearchVisible(false);
        if (messageVisible) setMessageVisible(false);
    }

    const selectedStyle = ("/" + usePathname()?.split('/')[1]) === href ? styles.current : {};
    const showClose = isMsg && messageVisible || isSearch && searchVisible || isSetting && menuVisible;

    //forMobileMenuIcon is the icon setting for the bottom bar. This is not for the mobile menu on the top
    if (!forMobileMenuIcon) {
        if (href !== undefined) {
            return (
                <li className={`${styles.listItem} ${selectedStyle}`}>

                    <Link onClick={onClickFunc} href={href}>
                        <div></div>
                        <span className='en'>{name_en}</span>
                        <span className='jp'>{name_jp}</span>

                        {showClose ? (<CloseIcon />) : (children)}
                    </Link>

                </li>
            )
        } else if (method !== undefined) {
            return (
                <li className={`${styles.listItem} ${selectedStyle}`}>

                    <a onClick={onClickFunc}>
                        <div></div>
                        <span className='en'>{name_en}</span>
                        <span className='jp'>{name_jp}</span>
                        {showClose ? (<CloseIcon />) : (children)}
                    </a>

                </li>
            )
        } else {
            console.error("Something went wrong");
        }
    } else {
        if (href !== undefined) {
            return (
                <li className={`${styles.listItemMobile}  ${selectedStyle}`}>

                    <Link onClick={onClickFunc} href={href}>
                        <div></div>
                        <div>{showClose ? (<CloseIcon />) : (children)}</div>
                    </Link>
                    <div className={styles.mobileNavTag}>
                        <span className='en'>{name_en}</span>
                        <span className='jp'>{name_jp}</span>
                    </div>
                </li>
            )
        } else if (method !== undefined) {
            return (
                <li className={`${styles.listItemMobile}  ${selectedStyle}`}>
                    <a onClick={onClickFunc}>
                        <div></div>
                        <div>{showClose ? (<CloseIcon />) : (children)}</div>
                    </a>
                    <div className={styles.mobileNavTag}>
                        <span className='en'>{name_en}</span>
                        <span className='jp'>{name_jp}</span>
                    </div>
                </li>
            )
        } else {
            console.error("Something went wrong");
        }
    }

}

export default LinkItem;