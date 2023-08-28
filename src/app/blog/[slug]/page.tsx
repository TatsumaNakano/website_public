
import { GET_POST, fetchGQL } from "@/graphql/queries";
import Post from "@/components/post";
import styles from "./styles.module.scss";
import SideBar from "@/components/sideBar";

import { Metadata, ResolvingMetadata } from 'next'

const BlogPost = async function (props: any) {

    const slug = props.params.slug;

    const res = await fetchGQL(GET_POST(slug));

    return (
        <>
            <div className={styles.blog}>
                <div>
                    <Post data={res.data} />
                    {res.data.post.post_setting.hidead ? null :
                        (
                            <div className={styles.buymeacoffee}>
                                <p className="en">If you find my post useful, please consider treating me a coffee🙏</p>
                                <p className="jp">この記事が役に立ったと思って頂けたら、コーヒーを奢ってください☕励みになります。🙏</p>
                                <div>
                                    <a className="en" target="_blank" href="https://www.buymeacoffee.com/tatsumanakano">☕Buy him a coffee</a>
                                    {/* <a className="en" href="">🪨Throw him a rock</a> */}
                                    <a className="jp" target="_blank" href="https://www.buymeacoffee.com/tatsumanakano">☕しゃーなしやで</a>
                                    {/* <a className="jp" href="">🪨石を投げる</a> */}
                                </div>
                            </div>)
                    }
                    {/* <div className={styles.ad}>
                        <p className="en">If you click the ad below I earn some money. If you don't like that idea, careful not to press it.🙅</p>
                        <p className="jp">下の広告をポチると僕にお金が入る仕組みになっています。なんかそれやだなぁって思われた方は間違って押さないようにして下さい。🙅</p>
                    </div> */}
                </div>

                <SideBar />
            </div>

            {/* <a className="en" href="https://www.buymeacoffee.com/tatsumanakano" target="_blank">
                <img src={`https://img.buymeacoffee.com/button-api/?emoji=🍕&slug=tatsumanakano&button_colour=454545&font_colour=ffffff&font_family=Bree&outline_colour=ffffff&coffee_colour=FFDD00`} />
            </a> */}
        </>
    );
}

type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    return {
        alternates: {
            // canonical: "/",
            languages: {
                "x-default": `https://tatsuma.co/blog/${params.slug}`,
                "en": `https://en.tatsuma.co/blog/${params.slug}`,
                "ja": `https://ja.tatsuma.co/blog/${params.slug}`,
            }
        }
    }
}

export default BlogPost;