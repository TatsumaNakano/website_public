import React, { Component } from 'react'
import * as styles from "./styles.module.scss"

interface propsType {
    data: any,
    isCurrent: boolean
}

export default class HistoryItem extends Component<propsType>{
    render() {
        var org = this.props.data.organization
        var style = this.props.isCurrent ? styles.current : styles.past
        return (
            <div className={`${styles.historyItem}  ${style}`}>
                <div>
                    <label>{this.props.data.time}</label>
                    <h3>{this.props.data.title}</h3>
                    <h4>{org === "" ? "" : "@" + org}</h4>
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}
