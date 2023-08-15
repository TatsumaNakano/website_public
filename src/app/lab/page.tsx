
import { GET_LAB_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import Grid from '../../components/GridSystem/Grid';
import styles from "./styles.module.scss";
import { GridType } from '@/type/gridsystem';

const Lab = async function () {

    const res = await fetchGQL(GET_LAB_POSTS_LIST)
    if (res == undefined) return null;
    return (
        <>
            <Grid type={GridType.lab} columns={[2, 3, 3]} posts={res.data.posts.nodes} path={"/lab"} />
        </>
    )
}

export default Lab;