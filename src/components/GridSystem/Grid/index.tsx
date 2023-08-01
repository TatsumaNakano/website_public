"use client"
import React, { useRef, useLayoutEffect, useState } from 'react';
import styles from "./styles.module.scss"
import Cell from '../Cell';
import breakpoints from '@/utility/breakpoints';

interface propType {
    posts: any,
    path: string,
    columns: number[],
    gap: number,
    showTitle?: boolean,
    showBorder?: boolean,
    showDate?: boolean
}

const Grid = ({
    posts,
    path,
    columns = [1, 1, 1],
    gap,
    showTitle = false,
    showBorder = false,
    showDate = false }: propType) => {

    const [containerWidth, setContainerWidth] = useState(0);
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        const currentElem = elementRef.current;

        if (currentElem != null) {
            setContainerWidth(currentElem["clientWidth"]);
            const onResize = () => setContainerWidth(currentElem["clientWidth"]);
            window.addEventListener("resize", onResize);
        }
    }, []);

    var colCount = columns[2];

    if (containerWidth < breakpoints.tablet) {
        colCount = columns[1];
    }
    if (containerWidth < breakpoints.mobile) {
        colCount = columns[0];
    }


    var cellHeight = (containerWidth / colCount);
    if (columns[0] == 1 && columns[1] == 1 && columns[2] == 1) {
        cellHeight = containerWidth / 3;
        if (cellHeight < 200) cellHeight = 200;
    }

    const gridStyle = {
        gridAutoFlow: "row dense",
        gridAutoRows: `minmax(${cellHeight}px, auto)`,//Setting Height of the Cell
        gridTemplateColumns: `repeat(${colCount}, 1fr)`,
        gridGap: `${gap}px`
    }

    return (
        <div className={styles.grid} style={gridStyle} ref={elementRef}>
            {posts.map((post: any, index: number) => {
                return <Cell width={post.post_setting.width} height={post.post_setting.height} post={post} path={path} key={index} showTitle={showTitle} showBorder={showBorder} showDate={showDate} />
            })}
        </div>
    )

}

export default Grid;