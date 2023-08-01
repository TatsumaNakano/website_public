import React, { Component } from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link className={styles.logo} href="/">
            <div>Tatsuma<br />Nakano</div>
        </Link>
    )
}