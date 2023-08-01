import React, { Component } from 'react'
import Certificates from '../index';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';

interface propType {
    data: any
}

const CertificateItem = function ({ data }: { data: any }) {
    return (
        <a className={styles.certificateItem} href={data.link} target="_blank">
            <div>
                {/* <div></div> */}
                <img src={data.icon} alt='' />{/*<Image src={data.icon} fill={true} alt='' />*/}
            </div>
            <div>
                <h3>{data.title}</h3>
            </div>
            <label>
                <span className='en'>See Certificate</span>
                <span className='jp'>証明書を見る</span>
            </label>
        </a>
    )
}

export default CertificateItem