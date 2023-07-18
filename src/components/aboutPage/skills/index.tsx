import React, { Component } from 'react'
import * as styles from "./styles.module.scss"

export default class Skills extends Component {
    render() {
        return (
            <div className={styles.skills}>
                <h1>Skills & Softwares</h1>
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
}
