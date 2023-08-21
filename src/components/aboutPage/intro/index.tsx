'use client'
import styles from "./styles.module.scss"
import { useEffect, useState } from "react";
import { LoadImage } from "@/utility/loadImage";
import { useRecoilState } from "recoil"
import { languageState } from "@/states"
function Intro() {

    const [aboutImage, setAboutImage] = useState("");
    const [lang, setLang] = useRecoilState(languageState);


    useEffect(() => {
        LoadImage("/profile.png", setAboutImage);
    }, [])


    return (
        <div className={styles.intro}>
            <div>
                <div className={aboutImage === "" ? styles.hide : styles.show} style={{ backgroundImage: `url(${aboutImage})` }}></div>
                <div className={aboutImage === "" ? styles.hide : styles.show} style={{ backgroundImage: `url(${aboutImage})` }}></div>
            </div>
            {lang == "en" ? <h3 className="en">Hi! I&#39;m Tatsuma.</h3> : null}
            {lang == "ja" ? <h3 className="jp">こんにちは！</h3> : null}

            {lang == "en" ? <p className="en">I am a freelance Creative Technologist living in Japan.</p> : null}
            {lang == "ja" ? <p className="jp">フリーでデザイナー兼開発者をやっております。</p> : null}
            {lang == "en" ? <p className="en">My Ikigai is bringing happiness to people through my creations.</p> : null}
            {lang == "ja" ? <p className="jp">僕の作った物で人が喜んでくれるのが生き甲斐です。</p> : null}
            <br />
            {lang == "en" ? <p className="en">Feel free to drop me a message if you&#39;re interested in</p> : null}
            {lang == "en" ? <p className="en">working together and bringing our ideas to life.</p> : null}
            {lang == "ja" ? <p className="jp">お仕事のご依頼はお問い合わせから受け付けております。</p> : null}
            {lang == "ja" ? <p className="jp">一緒にアイデアを形にしましょう。</p> : null}
        </div>
    );
}

export default Intro;