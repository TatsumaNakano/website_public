"use client"

import Link from 'next/link'
import React, { Component } from 'react'
import styles from "./styles.module.scss"
// import { useSearchParams } from "next/navigation";

interface LinkProps {
    href?: string,
    method?: Function,
    forMobileMenuIcon?: boolean,
    name_en: string,
    name_jp: string,
    children: any,
}

const linkItem = function ({ href, method = () => { }, forMobileMenuIcon = false, name_en, name_jp, children }: LinkProps) {

    // const router = useSearchParams();
    // console.log(router)

    if (!forMobileMenuIcon) {//forMobileMenuIcon is the icon setting for the bottom bar. This is not for the mobile menu on the top
        if (href !== undefined) {
            return (
                <li className={styles.listItem}>

                    <Link onClick={() => { method() }} href={href}>
                        <div></div>
                        <span className='en'>{name_en}</span>
                        <span className='jp'>{name_jp}</span>

                        {children}
                    </Link>

                </li>
            )
        } else if (method !== undefined) {
            return (
                <li className={styles.listItem}>
                    <a onClick={() => { method() }}>
                        <div></div>
                        <span className='en'>{name_en}</span>
                        <span className='jp'>{name_jp}</span>

                        {children}
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

                    <Link onClick={() => { method() }} href={href}>
                        <div>
                            <span className='en'>{name_en}</span>
                            <span className='jp'>{name_jp}</span>
                        </div>
                        <div>{children}</div>


                    </Link>

                </li>
            )
        } else if (method !== undefined) {
            return (
                <li className={styles.listItemMobile}>
                    <a onClick={() => { method }}>
                        <div>
                            <span className='en'>{name_en}</span>
                            <span className='jp'>{name_jp}</span>
                        </div>
                        <div>{children}</div>
                    </a>
                </li>
            )
        } else {
            console.error("Something went wrong");
        }
    }

}

export default linkItem;