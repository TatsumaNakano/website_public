// "use client"

import Link from 'next/link'
import React, { Component } from 'react'
import styles from "./styles.module.scss"

interface LinkProps {
    href?: string,
    name_en: string,
    name_jp: string,
    children: any
}

const HeaderLink = function ({ href, name_en, name_jp, children }: LinkProps) {

    if (href !== undefined) {
        return (
            <li className={styles.listItem}>

                <Link href={href}>
                    <span className='en'>{name_en}</span>
                    <span className='jp'>{name_jp}</span>
                    <div></div>
                    {children}
                </Link>

            </li>
        )
    } else {
        return (
            <li className={styles.listItem}>

                <a>
                    <span className='en'>{name_en}</span>
                    <span className='jp'>{name_jp}</span>
                    <div></div>
                    {children}
                </a>

            </li>
        )
    }

}

export default HeaderLink;