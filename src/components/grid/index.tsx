import React, { Component } from 'react'
import { Grid, Cell } from "styled-css-grid"
import * as styles from './styles.module.scss';

interface propsType {
    data: any,
    columns: number
}

interface Item {
    width: number,
    height: number,
    title: string
}

export default class GridSystem extends Component<propsType>{
    render() {
        var postData = this.props.data.allWpPost.nodes;

        return (
            <Grid minRowHeight={"270px"} flow="row dense" columns={this.props.columns}>{
                postData.map((post: any, index: number) => {

                    return <Cell width={post.post_setting.width} height={post.post_setting.height} key={index}>
                        <div className={styles.gridItem}>
                            <p>{post.title}</p>
                        </div>
                    </Cell>
                })
            }</Grid >
        )
    }
}

