import React, { Component } from 'react'
import CertificateItem from './certificateItem'
import * as styles from "./styles.module.scss"

export default class Certificates extends Component {
    render() {
        return (
            <div className={styles.certs}>
                <h1>Certificates</h1>
                {certificates.map((item: any, index: number) => {
                    return <CertificateItem data={item} key={index} />
                })}
            </div>
        )
    }
}

var certificates = [
    {
        date: "May 29, 2023",
        title: "Introduction to Deep Learning & Neural Networks with Keras",
        icon: "https://cdn-icons-png.flaticon.com/512/5969/5969083.png",
        link: "https://www.coursera.org/account/accomplishments/verify/DQA7ULANY7UB"
    }

]