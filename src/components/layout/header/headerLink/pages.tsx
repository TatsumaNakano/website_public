import Link from 'next/link'
import React, { Component } from 'react'
import styles from "./styles.module.scss"

interface LinkProps {
    href: string,
    name: string
}

export default async ({ href, name }: { href: string, name: string }) => {
    return (
        <li className={styles.listItem}>
            <Link href={href}>{name}</Link>
        </li>
    )
}