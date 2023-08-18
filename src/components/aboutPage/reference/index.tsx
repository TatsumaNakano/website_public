import styles from "./styles.module.scss"
import { useRecoilState } from "recoil"
import { languageState } from "@/states"
import React, { useState, useRef, useLayoutEffect } from 'react';

import breakpoints from '@/utility/breakpoints';

function Reference() {
    const [lang, setLang] = useRecoilState(languageState);
    const [containerWidth, setContainerWidth] = useState(0);
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        const currentElem = elementRef.current;

        if (currentElem != null) {
            setContainerWidth(currentElem["clientWidth"]);
            const onResize = () => setContainerWidth(currentElem["clientWidth"]);
            if (typeof (window) !== undefined) window.addEventListener("resize", onResize);
        }
    }, []);

    return (
        <div className={styles.reference}>
            {lang == "en" ? <h4 className='en'>Recommendations</h4> : null}
            {lang == "ja" ? <h4 className='jp'>推薦</h4> : null}
            <div>
                <h5>Matt Silverman</h5>
                <label><a href="https://www.ibelieveinswordfish.com/">CEO @ iBelieveInSwordfish Inc.</a></label>
                <div>
                    {
                        (() => {
                            if (containerWidth > breakpoints.mobile) {
                                if (lang == "en") {

                                    return (<>
                                        <p>{en_text_A}</p>
                                        <p>{en_text_B}</p>
                                    </>)

                                } else if (lang == "ja") {
                                    return (<>
                                        <p>{ja_text_A}</p>
                                        <p>{ja_text_B}</p>
                                    </>)
                                }
                            } else if (containerWidth < breakpoints.mobile) {
                                if (lang == "en") {

                                    return <p>{en_text_A + en_text_B}</p>

                                } else if (lang == "ja") {
                                    return <p>{ja_text_A + ja_text_B}</p>
                                }
                            }
                        })()
                    }
                </div>
            </div>
        </div >
    );
}

const en_text_A = `I had the pleasure of working with Tatsuma Nakano for five years at my studio iBelieveInSwordfish. 
                    Tatsuma was recommended to me by the head of the motion design department at The Academy of Art University as a prospective intern.
                    Tatsuma was following his own unique path at The Academy, exploring a wide range of cutting edge technologies for motion design including game engines and frameworks such as Processing.
                    I brought him on board as an intern and started having him explore different ideas I had brewing in my head. We were just beginning to explore XR development with an Oculus development kit and HTC Vive,
                    and with Tatsuma’s Unity experience we began creating prototypes.
                    This included an 8k streaming 360-video tour of the San Francisco waterfront where users could hyper-port between 20 different destinations using eye gaze.
                    We then explored creating 360 equirectangular matte paintings in Photoshop which Tatsuma spherically re-projected onto 3D geometry in Unity to create parallax with 6 degrees of freedom (6-DOF) in Vive.
                    Tatsuma also ported this test to WebVR for playback in a browser, and Apple ARKit for an augmented reality version on iPhone.
                    We shared the results with clients from `;

const en_text_B = `companies like Facebook, Google, and Dolby, and everyone agreed that the results were stunning. 
                    After graduation I hired Tatsuma on staff as a full-time Creative Technologist.
                    Within months our workload shifted to rely more and more on Unity and Unreal Engine, with Tatsuma leading those parts of the projects.
                    Additionally, his core motion design skills continued to improve, both as an animator, designer, and technologist.
                    Tatsuma put all of this knowledge-base together to dig into Side Effects Houdini software,
                    which from my experience is one of the most technologically challenging tools to master.
                    Within months Tatsuma was outputting very tricky shots involving fluid dynamics and difficult physics simulations.
                    It was amazing to watch him grow from a kid in school to a seasoned professional production artist.
                    When Tatsuma decided to leave Swordfish and head back to Japan,
                    it was one of the biggest losses I have had at the studio – not only was I losing an amazing creative on our team,
                    but more importantly I was losing a friend. I truly cherished the time I spent with Tatsuma as a mentor.
                    He never ceased to amaze me, and I know he will continue to amaze me with whatever he does in the future.`;

const ja_text_A = `私は五年間にわたり中野竜磨とiBelieveInSwordfishという私のスタジオで一緒に働くことができました。
                    竜磨は、アカデミー・オブ・アート大学のモーションデザイン部門の責任者からの紹介で、インターン候補として私に推薦されました
                    竜磨はアカデミーで独自の道を歩んでおり、ゲームエンジンやProcessingなどのフレームワークを含む、モーションデザインのための最先端の技術を幅広く探求していました。
                    私は彼をインターンとして迎え入れ、私の頭に浮かんだ様々なアイデアを試すよう彼に依頼しました。当時Swordfishは、Oculusの開発キットやHTC Viveを使用してXR開発を始めており、
                    竜磨のUnityの経験を活かしてプロトタイプを作成し始めました。その一環として、ユーザーが目線を利用して20の異なる目的地間をハイパーポートできる、
                    サンフランシスコの水辺の8Kストリーミング360ビデオツアーを制作しました。それからは、Photoshopで360度の等方性マットペイントを作成し、
                    それをUnityで3Dジオメトリに球面投影してViveで6自由度（6-DOF）のパララックスを作成しました。竜磨はまた、このテストをWebVRに移植してブラウザで再生できるようにし、
                    iPhoneでの拡張現実バージョンのためにApple ARKitにも移植しました。我々はFacebook、Google、Dolbyなどの企業のクライアントと結果を共有し、皆がその結果に感動しました。`;

const ja_text_B = `卒業後、竜磨をクリエイティブテクノロジストとして正社員として採用しました。数か月のうちに、私たちの仕事はますますUnityやUnreal Engineに依存するようになり、
                    竜磨がプロジェクトのその部分をリードするようになりました。その他にも、アニメーターやデザイナー、技術者としての竜磨のモーションデザインの基本的なスキルも向上しました。
                    竜磨はこれらの知識を結集して、私の経験からすると最も技術的に難しいツールの一つであるSide Effects Houdiniソフトウェアに取り組みました。
                    数か月のうちに、竜磨は流体ダイナミクスや難しい物理シミュレーションを含む非常に難解なショットを出力するようになりました。学生からプロのプロダクションアーティストへと成長する姿を見るのは驚くばかりでした。
                    竜磨がSwordfishを離れて日本に戻ることを決めたとき、それは私のスタジオで経験した中で最も大きな損失の一つでした - 私たちの素晴らしいクリエイティブな仲間を失うだけでなく、
                    何よりも大切な友人を失うことになるからです。竜磨との時間をメンターとして過ごすことは本当に尊いものでした。彼の驚異的な能力には決して飽きることがなく、
                    彼が将来どのようなことを成し遂げるかが楽しみです。(訳ChatGPT3.5+修正)`
export default Reference;