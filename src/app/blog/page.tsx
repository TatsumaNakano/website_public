
import { GET_BLOG_POSTS_LIST } from '@/graphql/queries';
import GridSystem from '../../components/grid/page';
import client from "../../lib/apolloClient"
import { useQuery } from '@apollo/client';

export default async () => {

    const res = await client.query({
        query: GET_BLOG_POSTS_LIST
    })

    // const { data } = useQuery(GET_BLOG_POSTS_LIST)

    return (
        <GridSystem columns={2} data={res.data} path={"/blog"} />
    )
}
