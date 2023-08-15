import styles from "./styles.module.scss"
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoadImage } from "@/utility/loadImage";
import { GridType } from "@/type/gridsystem";

interface propsType {
    post: any,
    path: string,
    width: number,
    height: number,
    type: GridType
}


const Cell = ({ post,
    path,
    width,
    height,
    type }: propsType) => {

    const [bgImage, setBgImage] = useState("");
    // const [bgLoResImage, setBgLoResImage] = useState("");
    const [iconImage, setIconImage] = useState("");

    useEffect(() => {
        // if (post.post_setting.thumbnailLores) {
        //     LoadImage(post.post_setting.thumbnailLores.sourceUrl, setBgLoResImage);
        // }
        if (post.post_setting.thumbnail) {
            LoadImage(post.post_setting.thumbnail.sourceUrl, setBgImage);
        } else {
            setBgImage("none")
        }

        if (post.post_setting.icon) {
            LoadImage(post.post_setting.icon.sourceUrl, setIconImage);
        } else {
            setIconImage("none")
        }
    }, [])

    const bg = post.post_setting.thumbnail ? { backgroundImage: `url(${bgImage})` } : {};
    // const bgLores = post.post_setting.thumbnailLores ? { backgroundImage: `url(${bgLoResImage})` } : {};
    const jpTitle = post.post_setting.jptitle ? post.post_setting.jptitle : post.title;
    const icon = post.post_setting.icon ? iconImage : "";

    // //Show border or Not
    // const borderStyle = showBorder ? { borderStyle: "solid" } : { borderStyle: "none" };

    const date = new Date(post.date);

    const gridStyle = {
        gridColumnEnd: `span ${width}`,
        gridRowEnd: `span ${height}`
    }

    // const borderGlowStyle = borderGlow ? styles.borderGlow : null;

    if (type === GridType.main) {
        return (
            <div className={`${styles.cell} ${styles.main}`} style={gridStyle}>
                <Link href={path + "/" + post.slug} className={`${styles.gridItem}`}>
                    <div className={`${styles.glow} ${bgImage === "" ? styles.hide : styles.show}`} style={bg}></div>{ /*For glow */}
                    <div className={styles.loading}></div>
                    <div className={`${styles.cellContext} ${bgImage === "" ? styles.hide : styles.show}`} style={bg}>
                        <div className={styles.imageWrapper}>
                            <img className={bgImage === "" || icon === "" ? styles.hide : styles.show} src={icon as string} alt='' />
                            {/* <Image src={icon} fill={true} alt='' /> */}
                            {/* <div></div> */}

                        </div>

                        <p>
                            <span className="en">{post.post_setting.tagline}</span>
                            <span className="jp">{post.post_setting.taglineJp}</span>
                        </p>
                        {/* <div className={styles.mainDesc}> */}
                        {/* <h4>
                            <span className="en">{post.title}</span>
                            <span className="jp">{jpTitle}</span>
                        </h4> */}

                        {/* </div> */}
                    </div>
                </Link>

            </div>
        )
    } else if (type === GridType.lab) {
        return (
            <div className={`${styles.cell} ${styles.lab}`} style={gridStyle}>
                <Link href={path + "/" + post.slug} className={`${styles.gridItem}`}>
                    <div className={`${styles.glow} ${bgImage === "" ? styles.hide : styles.show}`} style={bg}></div>{ /*For glow */}
                    <div className={styles.loading}></div>
                    <div className={`${styles.cellContext} ${bgImage === "" ? styles.hide : styles.show}`} style={bg}>
                        <div className={styles.imageWrapper}>
                            <img className={bgImage === "" || icon === "" ? styles.hide : styles.show} src={icon as string} alt='' />
                            {/* <Image src={icon} fill={true} alt='' /> */}
                            <div></div>
                        </div>
                        <p>
                            <span className="en">{post.title}</span>
                            <span className="jp">{jpTitle}</span>
                        </p>
                        {/* <>
                            <label className="en">{date.toDateString()}</label>
                            <label className="jp">{`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}</label>
                        </> */}
                    </div>
                </Link>
            </div>
        )
    } else if (type === GridType.blog) {
        return (
            <div className={`${styles.cell} ${styles.blog}`} style={gridStyle}>
                <Link href={path + "/" + post.slug} className={`${styles.gridItem}`}>
                    <div className={`${styles.glow} ${bgImage === "" ? styles.hide : styles.show}`} style={bg}></div>{ /*For glow */}
                    <div className={styles.loading}></div>
                    <div className={`${styles.cellContext} ${bgImage === "" ? styles.hide : styles.show}`} style={bg}>
                        <div className={styles.imageWrapper}>
                            <img className={bgImage === "" || icon === "" ? styles.hide : styles.show} src={icon as string} alt='' />
                            {/* <Image src={icon} fill={true} alt='' /> */}
                            <div></div>
                        </div>
                        <p>
                            <span className="en">{post.title}</span>
                            <span className="jp">{jpTitle}</span>
                        </p>
                        <>
                            <label className="en">{date.toDateString()}</label>
                            <label className="jp">{`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}</label>
                        </>
                    </div>
                </Link>
            </div>
        )
    }
}



export default Cell;