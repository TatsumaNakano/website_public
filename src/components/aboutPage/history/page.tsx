import React, { Component } from 'react'
import HistoryItem from './historyItem';
import styles from './styles.module.scss';

import { useRecoilState } from "recoil"
import { languageState } from "@/states"

const History = function () {
    const [lang, setLang] = useRecoilState(languageState);

    return (
        <div className={styles.history}>
            <h4>
                {lang == "en" ? <span className="en">Experiences & Education</span> : null}
                {lang == "ja" ? <span className="jp">経歴</span> : null}
            </h4>

            {history.map((item, index) => {
                return <HistoryItem key={index} data={item} isCurrent={index == 0} />
            })}

        </div>
    )
}

export default History;

var history = [
    {
        time: "Jun 2023 - Current",
        title: "<span class='en'>Freelance Creative Technologist</span><span class='jp'>デザイナー・個人開発者</span>",
        organization: "",
        description: `<span class='en'>Trying things that I could not challenge while working in the corporate world, learning more to make more.</span>
                    <span class='jp'>フリーだからこそできる自由な考え方で色々勉強したり作ったりしています。</span>`
    },
    {
        time: "Feb 2018 - Feb 2023",
        title: "<span class='en'>Creative Technologist</span><span class='jp'>クリエイティブテクノロジスト</span>",
        organization: "<a href='https://www.ibelieveinswordfish.com/'>iBelieveSwordfish Inc.</a>",
        description: `<span class='en'>I have worked on comprehensive tasks, including web development, 3D layout, lighting, rendering, visual development, asset management, VR/AR development, Company website development,and Blender render-farm integration. I have used numerous software programs, including Cinema 4D, Houdini, Blender, After Effects, and more.</span>
                    <span class='jp'>とても幅広い範囲での業務に携わらせてもらいました。3Dのシーンレイアウト、ライティング、レンダリング、絵作り、アセット管理、VR/AR開発、ホームページの開発管理、Blender用レンダーファームの実装など。ソフトウェアは主にCinema 4D, Houdini, Blender, After Effects、その他にも色々使わせてもらえました。</span>`
    },
    {
        time: "Jun 2017 - Dec 2017",
        title: "<span class='en'>Creative Intern</span><span class='jp'>インターンシップ</span>",
        organization: "<a href='https://www.ibelieveinswordfish.com/'>iBelieveSwordfish Inc.</a>",
        description: `<span class="en">My responsibility was to create a VR experience using Unity and the 360 video player plugin from Pixvana. I crafted an interactive experience where users can navigate around hotspots in San Francisco.</span>
                    <span class='jp'>Unityを使って、サンフランシスコ市内を動き回れるVRアプリを製作しました。WRLDというプラグインを使い、空の上からサンフランシスコ市内の指定された地点にテレポートする機能も実装。撮影した360動画をPixvana社から提供されたプラグインを使うことで8Kの360動画をサーバーから再生することができました。</span>`
    },
    {
        time: "Jan 2014 - Dec 2017",
        title: "<span class='en'>Bachelor of Fine Art | Web Design & New Media</span><span class='jp'>学士（美術）| ウェブデザイン＆ニューメディア学部（現IxD）</span>",
        organization: "<a href='https://www.academyart.edu//'>Academy of Art University</a>",
        description: `<span class='en'>I have studied UI/UX designs and development, primarily for websites, mobile applications, and VR/AR experiences.</span>
                    <span class='jp'>主にウェブサイトやアプリ、VR/ARのUI・UXのデザインと開発の授業を受講しました。</span>`
    },
]
