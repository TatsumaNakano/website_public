import { GET_BLOG_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import GridSystem from '../../components/grid/page';
import breakpoints from '@/utility/breakpoints';

const Blog = async function () {

    const res = await fetchGQL(GET_BLOG_POSTS_LIST);
    if (res == undefined) return null;

    return (
        <GridSystem columns={2} data={res.data} path={"/blog"} showTitle={true} showBorder={true} showDate={true} />
    )
}

export default Blog;