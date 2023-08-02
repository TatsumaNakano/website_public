import styles from "./styles.module.scss"
import Link from "next/link";

interface propsType {
    post: any,
    path: string,
    width: number,
    height: number,
    gap?: string,
    showTitle?: boolean,
    showBorder?: boolean,
    showDate?: boolean,
    borderGlow?: boolean
}


const Cell = ({ post,
    path,
    width,
    height,
    gap = "8px",
    showTitle = false,
    showBorder = false,
    showDate = false,
    borderGlow = false }: propsType) => {

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
            <label className="jp">{`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}</label>
        </>)
        : null

    const gridStyle = {
        gridColumnEnd: `span ${width}`,
        gridRowEnd: `span ${height}`
    }

    const borderGlowStyle = borderGlow ? styles.borderGlow : null;

    return (
        <div className={styles.cell} style={gridStyle}>
            <Link href={path + "/" + post.slug} className={`${styles.gridItem} ${borderGlowStyle}`} style={borderStyle}>
                <div className={styles.glow} style={bg}></div>{ /*For glow*/}
                <div className={styles.main} style={bg}>
                    <div className={styles.imageWrapper}>
                        <img src={icon} alt='' />
                        {/* <Image src={icon} fill={true} alt='' /> */}
                        <div></div>
                    </div>
                    {title}
                    {dateComponent}
                </div>
            </Link>
        </div>
    );
}

export default Cell;