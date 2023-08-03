// "use client"

import Link from 'next/link'
import React, { Component } from 'react'
import styles from "./styles.module.scss"

interface LinkProps {
    href?: string,
    method?: Function,
    forMobileMenuIcon?: boolean,
    name_en: string,
    name_jp: string,
    children: any,
}

const HeaderLink = function ({ href, method = () => { }, forMobileMenuIcon = false, name_en, name_jp, children }: LinkProps) {

    if (!forMobileMenuIcon) {
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
                        <div>{children}</div>
                        <div>
                            <span className='en'>{name_en}</span>
                            <span className='jp'>{name_jp}</span>
                        </div>

                    </Link>

                </li>
            )
        } else if (method !== undefined) {
            return (
                <li className={styles.listItemMobile}>
                    <a onClick={() => { method }}>
                        <div>{children}</div>
                        <div>
                            <span className='en'>{name_en}</span>
                            <span className='jp'>{name_jp}</span>
                        </div>

                    </a>

                </li>
            )
        } else {
            console.error("Something went wrong");
        }
    }

}

export default HeaderLink;