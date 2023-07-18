import React, { Component } from 'react'
import * as styles from './styles.module.scss';

export default class Logo extends Component {
    render() {
        return (
            <div className={styles.logo}>Tatsuma<br />Nakano</div>
        )
    }
}
