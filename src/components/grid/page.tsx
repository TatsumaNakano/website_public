'use client'

import { Grid, Cell } from "styled-css-grid"
import styles from './styles.module.scss';
import Link from 'next/link';

interface propsType {
    data: any,
    columns: number,
    path: string,
    gap?: string,
    showTitle?: boolean,
    showBorder?: boolean,
    showDate?: boolean
}

// interface Item {
//     width: number,
//     height: number,
//     title: string
// }

export default ({ data, columns, path, gap = "8px", showTitle = false, showBorder = false, showDate = false }: propsType) => {

    if (data == undefined) return null
    const posts = data.posts.nodes;

    return (
        <Grid minRowHeight={`${800 / 3}px`} flow="row dense" columns={columns} gap={gap}>{
            posts.map((post: any, index: number) => {

                const bg = post.post_setting.thumbnail ? { backgroundImage: `url(${post.post_setting.thumbnail.sourceUrl})` } : {};
                const jpTitle = post.post_setting.jptitle ? post.post_setting.jptitle : post.title;
                const icon = post.post_setting.icon ? post.post_setting.icon.sourceUrl : null;

                //Show title or not
                const title = showTitle ? (<p>
                    <span className="en">{post.title}</span>
                    <span className="jp">{jpTitle}</span>
                </p>) : null;

                //Show border or Not
                const borderStyle = showBorder ? { borderStyle: "solid" } : { borderStyle: "none" };

                const date = new Date(post.date);
                const dateComponent = showDate ?
                    (<>
                        <label className="en">{date.toDateString()}</label>
                        <label className="jp">{`${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`}</label>
                    </>)
                    : null

                return (
                    <Cell width={post.post_setting.width} height={post.post_setting.height} key={index}>
                        <Link href={path + "/" + post.slug} className={styles.gridItem} style={borderStyle}>
                            <div style={bg}></div>{ /*For glow*/}
                            <div style={bg}>
                                <div>
                                    <img src={icon} />
                                    <div></div>
                                </div>
                                {title}
                                {dateComponent}
                            </div>
                        </Link>
                    </Cell>
                )
            })
        }</Grid >
    )
}