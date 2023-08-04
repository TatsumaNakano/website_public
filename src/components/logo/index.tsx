// "use client"

import React, { Component } from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link className={styles.logo} href="/">
            {/* <div>Tatsuma<br />Nakano</div> */}
            <h1 className="en">Tatsuma</h1>
            <h1 className="jp">竜磨</h1>
        </Link>
    )
}