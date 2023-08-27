"use client"
import React, { useRef, useLayoutEffect, useState } from 'react';
import styles from "./styles.module.scss"
import Cell from '../Cell';
import breakpoints from '@/utility/breakpoints';
import { GridType } from '@/type/gridsystem';

interface propType {
    posts: any,
    path: string,
    columns: number[],
    type: GridType
}

const Grid = ({
    posts,
    path,
    columns = [1, 1, 1],
    type }: propType) => {

    const [containerWidth, setContainerWidth] = useState(0);
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        const currentElem = elementRef.current;

        if (currentElem != null) {
            setContainerWidth(currentElem["clientWidth"]);
            const onResize = () => setContainerWidth(currentElem["clientWidth"]);
            if (typeof (window) !== undefined) window.addEventListener("resize", onResize);
        }
    }, []);

    var colCount = columns[2];

    if (containerWidth < breakpoints.tablet) {
        colCount = columns[1];
    }
    if (containerWidth < breakpoints.mobile) {
        colCount = columns[0];
    }

    //This is for featured page


    if (type == GridType.main) {

        const gap = Math.pow(1.618, 2);
        var cellHeight = (containerWidth / colCount) - gap;
        if (columns[0] == 1 && columns[1] == 1 && columns[2] == 1) {
            cellHeight = containerWidth / 3;
            if (cellHeight < 200) cellHeight = 200;
        }

        const gridStyleMain = {
            gridAutoFlow: "row dense",
            gridAutoRows: `minmax(${cellHeight}px, auto)`,//Setting Height of the Cell
            gridTemplateColumns: `repeat(${colCount}, 1fr)`,
            gridGap: `${gap}rem`
        }

        return (
            <div className={styles.grid} style={gridStyleMain} ref={elementRef}>
                {posts.map((post: any, index: number) => {
                    return <Cell type={type} width={post.post_setting.width} height={post.post_setting.height} post={post} path={path} key={index} />
                })}
            </div>
        )
    } else if (type == GridType.lab) {

        const gap = 1.618;
        var cellHeight = (containerWidth / colCount) - gap;
        if (columns[0] == 1 && columns[1] == 1 && columns[2] == 1) {
            cellHeight = containerWidth / 3;
            if (cellHeight < 200) cellHeight = 200;
        }

        const gridStyleLab = {
            gridAutoFlow: "row dense",
            gridAutoRows: `minmax(${cellHeight}px, auto)`,//Setting Height of the Cell
            gridTemplateColumns: `repeat(${colCount}, 1fr)`,
            gridGap: `${gap}rem`
        }
        return (
            <div className={styles.grid} style={gridStyleLab} ref={elementRef}>
                {posts.map((post: any, index: number) => {
                    return <Cell type={type} width={post.post_setting.width} height={post.post_setting.height} post={post} path={path} key={index} />
                })}
            </div>
        )
    } else if (type == GridType.blog) {

        const gap = 1.618;
        var cellHeight = (containerWidth / colCount) - gap;
        if (columns[0] == 1 && columns[1] == 1 && columns[2] == 1) {
            cellHeight = containerWidth / 3;
            if (cellHeight < 200) cellHeight = 200;
        }

        const gridStyleBlog = {
            gridAutoFlow: "row dense",
            gridAutoRows: `minmax(${cellHeight}px, auto)`,//Setting Height of the Cell
            gridTemplateColumns: `repeat(${colCount}, 1fr)`,
            gridGap: `${gap}rem`
        }
        return (
            <div className={styles.grid} style={gridStyleBlog} ref={elementRef}>
                {posts.map((post: any, index: number) => {
                    return <Cell type={type} width={post.post_setting.width} height={post.post_setting.height} post={post} path={path} key={index} />
                })}
            </div>
        )
    }

}

export default Grid;