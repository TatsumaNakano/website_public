// import { Grid, Cell } from "styled-css-grid"
import Grid from './Grid';

import styles from './styles.module.scss';
import Link from 'next/link';
import Image from "next/image";

interface propsType {
    data: any,
    columns: number[],
    path: string,
    gap?: number,
    showTitle?: boolean,
    showBorder?: boolean,
    showDate?: boolean
}

const GridSystem = function ({ data,
    columns,
    path,
    gap = 8,
    showTitle = false,
    showBorder = false,
    showDate = false }:
    propsType) {

    if (data == undefined) return null;

    const posts = data.posts.nodes;


    return (
        <Grid posts={posts} path={path} columns={columns} gap={gap} showTitle={showTitle} showBorder={showBorder} showDate={showDate} />
    )
}

export default GridSystem;