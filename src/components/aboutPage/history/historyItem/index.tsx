import React, { Component } from 'react'
import styles from "./styles.module.scss"

interface propsType {
    data: any,
    isCurrent: boolean
}

const HistoryItem = function ({ data, isCurrent }: { data: any, isCurrent: boolean }) {
    var org = data.organization
    var style = isCurrent ? styles.current : styles.past
    return (
        <div className={`${styles.historyItem}  ${style}`}>
            <div>
                <label dangerouslySetInnerHTML={{ __html: data.time }}></label>
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h4 dangerouslySetInnerHTML={{ __html: org === "" ? "" : "@" + org }}></h4>
                <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </div>
        </div>
    )
}

export default HistoryItem;