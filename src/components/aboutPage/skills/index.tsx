"use client"
import React, { Component } from 'react'
import styles from "./styles.module.scss"
import { useRecoilState } from "recoil"
import { languageState } from "@/states"

const Skills = function () {

    const [lang, setLang] = useRecoilState(languageState);


    return (
        <div className={styles.skills}>
            {lang == "en" ? <h1 className='en'>Services</h1> : null}
            {lang == "ja" ? <h1 className='jp'>提供できるサービス</h1> : null}
            <div>
                <div>
                    <ul>
                        <li>
                            {lang == "en" ? <span className="en">CG Video Production</span> : null}
                            {lang == "ja" ? <span className="jp">CG動画制作</span> : null}
                        </li>
                        <li>
                            {lang == "en" ? <span className="en">Poster Design</span> : null}
                            {lang == "ja" ? <span className="jp">ポスター制作</span> : null}
                        </li>
                        <li>
                            {lang == "en" ? <span className="en">UI/UX Design</span> : null}
                            {lang == "ja" ? <span className="jp">UI/UX デザイン</span> : null}
                        </li>
                        <li>
                            {lang == "en" ? <span className="en">Web Development</span> : null}
                            {lang == "ja" ? <span className="jp">ウェブサイト制作</span> : null}
                        </li>
                        {/* <li>
                            {lang == "en" ? <span className="en">VR & AR Development</span> : null}
                            {lang == "ja" ? <span className="jp">VR & AR開発</span> : null}
                        </li> */}
                        <li>
                            {lang == "en" ? <span className="en">Web Operation & Management</span> : null}
                            {lang == "ja" ? <span className="jp">サイト運用保守</span> : null}
                        </li>

                        {/* <li>
                            {lang == "en" ? <span className="en">Animation</span> : null}
                            {lang == "ja" ? <span className="jp">アニメーション制作</span> : null}
                        </li> */}

                        {/* <li>
                            {lang == "en" ? <span className="en">Interaction Design & Development</span> : null}
                            {lang == "ja" ? <span className="jp">インタラクションデザイン開発</span> : null}
                        </li> */}
                        <li>
                            {lang == "en" ? <span className="en">Technical Support</span> : null}
                            {lang == "ja" ? <span className="jp">テクニカルサポート</span> : null}
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Skills;