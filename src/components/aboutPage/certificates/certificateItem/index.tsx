import React, { Component } from 'react'
import Certificates from '../index';
import Link from 'next/link';
import styles from './styles.module.scss';

interface propType {
    data: any
}

export default ({ data }: { data: any }) => {
    return (
        <div className={styles.certificateItem} >
            <Link href={data.link}>
                {/* <label>{data.date}</label> */}
                <img src={data.icon} />
                <h3>{data.title}</h3>
            </Link>
        </div>
    )
}