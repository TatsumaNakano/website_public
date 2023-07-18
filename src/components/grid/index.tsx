import React, { Component } from 'react'
import { Grid, Cell } from "styled-css-grid"
import * as styles from './styles.module.scss';

interface propsType {
    data: Object[],
    columns: number
}

interface Item {
    width: number,
    height: number,
    title: string
}

export default class GridSystem extends Component<propsType>{
    render() {
        return (
            <Grid minRowHeight={"270px"} flow="row dense" columns={this.props.columns}>{this.props.data.map((item: any, index: number) => {
                // var randCol = Math.floor(Math.random() * index).toString(16);
                return <Cell width={item.width} height={item.height} key={index}>
                    <div className={styles.gridItem}>
                        <p>{item.title}</p>
                    </div>
                </Cell>
            })
            }</Grid >
        )
    }
}

