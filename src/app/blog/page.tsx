
import { GET_BLOG_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import GridSystem from '../../components/grid/page';

export default async () => {

    const res = await fetchGQL(GET_BLOG_POSTS_LIST);

    return (
        <GridSystem columns={2} data={res.data} path={"/blog"} />
    )
}
