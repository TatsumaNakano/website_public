import React, { Component } from 'react'
// import GridSystem from '../../components/grid';
import styles from "./styles.module.scss"
import Skills from '../../components/aboutPage/skills';
import Certificates from '../../components/aboutPage/certificates';
import History from '../../components/aboutPage/history/page';
import Hobbies from '../../components/aboutPage/hobbies';

const About = function () {
    return (
        <>
            <div className={styles.intro}>
                <div><div></div><div></div></div>
                <h3 className="en">Hi! I'm Tatsuma.</h3>
                <h3 className="jp">こんにちは！</h3>

                <p className="en">I am a freelance Creative Technologist living in Japan.</p>
                <p className="jp">フリーでクリエイティブテクノロジストをやっております。</p>
                <p className="en">My Ikigai is making people happy with what I make.</p>
                <p className="jp">僕の作った物で人が喜んでくれるのが生き甲斐です。</p>
                <br />
                <p className="en">Feel free to drop me a message if you're interested in</p>
                <p className="en">working together and bringing our ideas to life.</p>
                <p className="jp">お仕事のご依頼は右のメッセージ欄から受け付けております。</p>
            </div>
            <Skills />
            <History />
            <Certificates />
            <Hobbies />
        </>
    )
}

export default About;
