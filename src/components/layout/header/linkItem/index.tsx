"use client"

import Link from 'next/link'
import React, { Component } from 'react'
import styles from "./styles.module.scss"
// import { useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { mobileMenuState, searchState, messageViewState } from "@/states";
import CloseIcon from "@/assets/icons/icon_close.svg"



interface LinkProps {
    href?: string,
    method?: Function,
    forMobileMenuIcon?: boolean,
    name_en: string,
    name_jp: string,
    children: any,
    isClosable?: boolean
}

const LinkItem = function ({ href, method = () => { }, forMobileMenuIcon = false, name_en, name_jp, children, isClosable = false, }: LinkProps) {

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

    const closeIcon = isClosable ? <CloseIcon /> : null;


    if (!forMobileMenuIcon) {//forMobileMenuIcon is the icon setting for the bottom bar. This is not for the mobile menu on the top
        if (href !== undefined) {
            return (
                <li className={styles.listItem}>

                    <Link onClick={onClickFunc} href={href}>
                        <div></div>
                        <span className='en'>{name_en}</span>
                        <span className='jp'>{name_jp}</span>

                        {children}{closeIcon}
                    </Link>

                </li>
            )
        } else if (method !== undefined) {
            return (
                <li className={styles.listItem}>
                    <a onClick={onClickFunc}>
                        <div></div>
                        <span className='en'>{name_en}</span>
                        <span className='jp'>{name_jp}</span>

                        {children}{closeIcon}
                    </a>

                </li>
            )
        } else {
            console.error("Something went wrong");
        }
    } else {
        if (href !== undefined) {
            return (
                <li className={styles.listItemMobile}>

                    <Link onClick={onClickFunc} href={href}>
                        <div>
                            <span className='en'>{name_en}</span>
                            <span className='jp'>{name_jp}</span>
                        </div>
                        <div>{children}{closeIcon}</div>


                    </Link>

                </li>
            )
        } else if (method !== undefined) {
            return (
                <li className={styles.listItemMobile}>
                    <a onClick={onClickFunc}>
                        <div>
                            <span className='en'>{name_en}</span>
                            <span className='jp'>{name_jp}</span>
                        </div>
                        <div>{children}{closeIcon}</div>
                    </a>
                </li>
            )
        } else {
            console.error("Something went wrong");
        }
    }

}

export default LinkItem;