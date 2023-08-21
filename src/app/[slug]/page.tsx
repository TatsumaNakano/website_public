import { GET_POST, fetchGQL } from "@/graphql/queries";
// import styles from "@/styles/post.module.scss"
import Post from "@/components/post";

import { Metadata, ResolvingMetadata } from 'next'


const WorkPost = async function (props: any) {

    const slug = props.params.slug;

    const res = await fetchGQL(GET_POST(slug));

    return <Post data={res.data} />;
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
                "x-default": `https://tatsuma.co/${params.slug}`,
                "en": `https://en.tatsuma.co/${params.slug}`,
                "ja": `https://ja.tatsuma.co/${params.slug}`,
            }
        }
    }
}


export default WorkPost;