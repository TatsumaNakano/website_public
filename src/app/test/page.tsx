import { GET_TEST_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import Grid from '../../components/GridSystem/Grid';
import breakpoints from '@/utility/breakpoints';
import { GridType } from '@/type/gridsystem';

import { Metadata, ResolvingMetadata } from 'next'


const Test = async function () {

    const res = await fetchGQL(GET_TEST_POSTS_LIST);
    if (res == undefined) return null;


    return (
        <>
            {/* <Grid type={GridType.blog} columns={[1, 2, 2]} posts={res.data.posts.nodes} path={"/test"} /> */}
        </>
    )
}

export default Test;