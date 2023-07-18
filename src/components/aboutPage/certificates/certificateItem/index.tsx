import React, { Component } from 'react'
import Certificates from '../index';
import { Link } from 'gatsby';
import * as styles from './styles.module.scss';

interface propType {
    data: any
}

export default class CertificateItem extends Component<propType>{
    render() {
        return (
            <div className={styles.certificateItem} >
                <Link to={this.props.data.link}>
                    <label>{this.props.data.date}</label>
                    <img src={this.props.data.icon} />
                    <h3>{this.props.data.title}</h3>
                </Link>
            </div>
        )
    }
}
