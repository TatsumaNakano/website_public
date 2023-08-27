"use client"
import Script from "next/script";
import styles from "./styles.module.scss"
import { useEffect, useRef, useState } from "react"

const SideBar = () => {


    const ref = useRef<any>(null);
    const [sideBarStick, setSideBarStickState] = useState<any>(false);

    useEffect(() => {
        window.addEventListener("scroll", (e: any) => setSideBarStickState(window?.scrollY > 200))
    }, [])

    // const stickStyle = sideBarStick ? { position: "sticky", top: "150px" } : { position: "relative" }

    return (
        <>
            <div className={styles.sideBar} ref={ref}>
                <div>
                    <div>
                        <h5 className="en">Author of this post</h5>
                        <h5 className="jp">この記事を書いた人</h5>

                        <div className={styles.profile}><div></div><div></div></div>
                        {/* <h3 className="en">Hi! I&#39;m Tatsuma.</h3>
                <h3 className="jp">こんにちは！</h3> */}
                        <h6 className="en">Tatsuma</h6>
                        <h6 className="jp">タツマ</h6>


                        <label className="en">Creative Technologist</label>
                        <label className="jp">デザイナー・開発者</label>

                        <p className="en">My Ikigai is making people happy with what I make.</p>
                        <p className="jp">僕の作った物で人が喜んでくれるのが生き甲斐です。</p>

                        <p className="en">Feel free to drop me a message if you&#39;re interested in working together and bringing our ideas to life.</p>
                        <p className="jp">お仕事のご依頼はお問い合わせから受け付けております。</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;