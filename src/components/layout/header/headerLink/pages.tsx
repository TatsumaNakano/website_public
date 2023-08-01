import Link from 'next/link'
import React, { Component } from 'react'
import styles from "./styles.module.scss"

interface LinkProps {
    href: string,
    name: string
}

const HeaderLink = async function ({ href, name_en, name_jp }: { href: string, name_en: string, name_jp: string }) {
    return (
        <li className={styles.listItem}>
            <Link href={href}><span className='en'>{name_en}</span><span className='jp'>{name_jp}</span></Link>
        </li>
    )
}

export default HeaderLink;