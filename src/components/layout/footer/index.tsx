import React, { Component } from 'react'
import * as styles from './styles.module.scss';


export default class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <ul>
                    <li>ArtStaion</li>
                    <li>Github</li>
                    <li>HuggingFace</li>
                    <li>LinkedIn</li>
                </ul>
                <label>@All rights reserved</label>
            </div>
        )
    }
}
