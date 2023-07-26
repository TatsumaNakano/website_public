
import { GET_PRODUCTS_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import GridSystem from '../../components/grid/page';

export default async () => {

    const res = await fetchGQL(GET_PRODUCTS_POSTS_LIST)

    return (
        <GridSystem columns={1} data={res.data} path={"/products"} />
    )
}
