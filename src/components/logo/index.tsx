import React, { Component } from 'react'
import * as styles from './styles.module.scss';
import { Link } from 'gatsby';

export default class Logo extends Component {
    render() {
        return (
            <Link className={styles.logo} to="/">
                <div>Tatsuma<br />Nakano</div>
            </Link>
        )
    }
}
