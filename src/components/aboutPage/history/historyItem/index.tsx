import React, { Component } from 'react'
import styles from "./styles.module.scss"

interface propsType {
    data: any,
    isCurrent: boolean
}

export default ({ data, isCurrent }: { data: any, isCurrent: boolean }) => {
    var org = data.organization
    var style = isCurrent ? styles.current : styles.past
    return (
        <div className={`${styles.historyItem}  ${style}`}>
            <div>
                <label>{data.time}</label>
                <h3>{data.title}</h3>
                <h4>{org === "" ? "" : "@" + org}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    )
}