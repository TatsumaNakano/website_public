import React, { Component } from 'react'
import styles from "./styles.module.scss"

const Skills = function () {
    return (
        <div className={styles.skills}>
            <h1 className='en'>Services</h1>
            <h1 className='jp'>提供できるサービス</h1>
            <div>
                <div>
                    <ul>
                        <li>
                            <span className="en">UI/UX Design</span>
                            <span className="jp">UI/UX デザイン</span>
                        </li>
                        <li>
                            <span className="en">Web & App Development</span>
                            <span className="jp">ウェブ＆アプリ開発</span>
                        </li>
                        <li>
                            <span className="en">VR & AR Development</span>
                            <span className="jp">VR & AR開発</span>
                        </li>
                        <li>
                            <span className="en">Poster Design</span>
                            <span className="jp">ポスター制作</span>
                        </li>
                        <li>
                            <span className="en">Animation</span>
                            <span className="jp">アニメーション制作</span>
                        </li>
                        <li>
                            <span className="en">Video Production</span>
                            <span className="jp">コマーシャル制作</span>
                        </li>
                        <li>
                            <span className="en">Interaction Design & Development</span>
                            <span className="jp">インタラクションデザイン開発</span>
                        </li>
                        <li>
                            <span className="en">Technical Support</span>
                            <span className="jp">テクニカルサポート</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Skills;