import { GET_BLOG_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import Grid from '../../components/GridSystem/Grid';
import breakpoints from '@/utility/breakpoints';
import { GridType } from '@/type/gridsystem';


const Blog = async function () {

    const res = await fetchGQL(GET_BLOG_POSTS_LIST);
    if (res == undefined) return null;

    return (
        <Grid type={GridType.blog} columns={[1, 2, 2]} posts={res.data.posts.nodes} path={"/blog"} />
    )
}

export default Blog;