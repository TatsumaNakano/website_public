
import { GET_LAB_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import GridSystem from '../../components/grid/page';

const Lab = async function () {

    const res = await fetchGQL(GET_LAB_POSTS_LIST)
    if (res == undefined) return null;
    return (
        <>
            <GridSystem columns={3} data={res.data} path={"/lab"} gap='10px' />
            <p>
                Don&#39;t think about making art, just get it done. Let everyone else decide if it&#39;s good or bad, whether they love it or hate it. While they are deciding, make even more art.
            </p>
        </>
    )
}

export default Lab;