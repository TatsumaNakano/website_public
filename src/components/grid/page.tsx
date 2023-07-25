'use client'

import { Grid, Cell } from "styled-css-grid"
import styles from './styles.module.scss';
import Link from 'next/link';

interface propsType {
    data: any,
    columns: number,
    path: string
}

// interface Item {
//     width: number,
//     height: number,
//     title: string
// }

export default ({ data, columns, path }: propsType) => {

    const posts = data.posts.nodes

    return (
        <Grid minRowHeight={"270px"} flow="row dense" columns={columns}>{
            posts.map((post: any, index: number) => {
                return (

                    <Cell width={post.post_setting.width} height={post.post_setting.height} key={index}>
                        <Link href={path + "/" + post.slug} className={styles.gridItem}>
                            <div>
                                <p>{post.title}</p>
                            </div>
                        </Link>
                    </Cell>
                )
            })
        }</Grid >
    )
}