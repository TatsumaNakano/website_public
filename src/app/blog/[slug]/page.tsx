
import { GET_POST, fetchGQL } from "@/graphql/queries";
import Post from "@/components/post";
import styles from "./styles.module.scss";
import SideBar from "@/components/sideBar";

import { Metadata, ResolvingMetadata } from 'next'

const BlogPost = async function (props: any) {

    const slug = props.params.slug;

    const res = await fetchGQL(GET_POST(slug));

    return (
        <div className={styles.blog}>
            <Post data={res.data} />
            <SideBar />
        </div>
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
            canonical: "/",
            languages: {
                "x-default": `https://tatsuma.co/blog/${params.slug}`,
                "en": `https://en.tatsuma.co/blog/${params.slug}`,
                "ja": `https://ja.tatsuma.co/blog/${params.slug}`,
            }
        }
    }
}

export default BlogPost;