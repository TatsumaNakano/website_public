'use client'

import React, { Component } from 'react'
// import GridSystem from '../../components/grid';
import styles from "./styles.module.scss"
import Skills from '../../components/aboutPage/skills';
import Certificates from '../../components/aboutPage/certificates';
import History from '../../components/aboutPage/history/page';
import Hobbies from '../../components/aboutPage/hobbies';
import { useEffect, useState } from "react";
import { LoadImage } from "@/utility/loadImage";

const About = function () {

    const [aboutImage, setAboutImage] = useState("");

    useEffect(() => {
        LoadImage("/profile.png", setAboutImage);
    }, [])

    return (
        <>
            <div className={styles.intro}>
                <div>
                    <div className={aboutImage === "" ? styles.hide : styles.show} style={{ backgroundImage: `url(${aboutImage})` }}></div>
                    <div className={aboutImage === "" ? styles.hide : styles.show} style={{ backgroundImage: `url(${aboutImage})` }}></div>
                </div>
                <h3 className="en">Hi! I&#39;m Tatsuma.</h3>
                <h3 className="jp">こんにちは！</h3>

                <p className="en">I am a freelance Creative Technologist living in Japan.</p>
                <p className="jp">フリーでデザイナー兼開発者をやっております。</p>
                <p className="en">My Ikigai is bringing happiness to people through my creations.</p>
                <p className="jp">僕の作った物で人が喜んでくれるのが生き甲斐です。</p>
                <br />
                <p className="en">Feel free to drop me a message if you&#39;re interested in</p>
                <p className="en">working together and bringing our ideas to life.</p>
                <p className="jp">お仕事のご依頼はお問い合わせから受け付けております。</p>
                <p className="jp">一緒にアイデアを形にしましょう。</p>
            </div>
            <Skills />
            <History />
            <Certificates />
            <Hobbies />
        </>
    )
}

export default About;
