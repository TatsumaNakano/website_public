
import { GET_PRODUCTS_POSTS_LIST } from '@/graphql/queries';
import GridSystem from '../../components/grid/page';
import client from "../../lib/apolloClient"

export default async () => {

    const res = await client.query({
        query: GET_PRODUCTS_POSTS_LIST,
    })


    return (
        <GridSystem columns={1} data={res.data} path={"/products"} />
    )
}
