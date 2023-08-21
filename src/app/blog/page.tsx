import { GET_BLOG_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import Grid from '../../components/GridSystem/Grid';
import breakpoints from '@/utility/breakpoints';
import { GridType } from '@/type/gridsystem';

import { Metadata, ResolvingMetadata } from 'next'


const Blog = async function () {

    const res = await fetchGQL(GET_BLOG_POSTS_LIST);
    if (res == undefined) return null;

    return (
        <Grid type={GridType.blog} columns={[1, 2, 2]} posts={res.data.posts.nodes} path={"/blog"} />
    )
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
                "x-default": `https://tatsuma.co/blog/`,
                "en": `https://en.tatsuma.co/blog/`,
                "ja": `https://ja.tatsuma.co/blog/`,
            }
        }
    }
}

export default Blog;