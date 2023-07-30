import React, { Component } from 'react'
import styles from "./styles.module.scss"

export default () => {
    return (
        <div className={styles.skills}>
            <h1 className='en'>Skills&Softwares</h1>
            <h1 className='jp'>スキルとソフトウェア</h1>
            <div>
                <div>
                    <ul>
                        <li>Visual Development</li>
                        <li>Interaction Design & Development</li>
                        <li>Asset Management</li>
                        <li>Technical Troubleshooting</li>
                        <li>Fullstack Web Development</li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}