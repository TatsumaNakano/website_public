import { Link } from 'gatsby'
import React, { Component } from 'react'
import * as styles from "./styles.module.scss"

interface propsType {
    to: string,
    name: string
}

export default class HeaderLink extends Component<propsType>{
    render() {
        return (
            <li className={styles.listItem}>
                <Link to={this.props.to}>{this.props.name}</Link>
            </li>
        )
    }
}
