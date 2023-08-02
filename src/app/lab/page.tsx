
import { GET_LAB_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import GridSystem from '../../components/GridSystem/page';
import styles from "./styles.module.scss";

const Lab = async function () {

    const res = await fetchGQL(GET_LAB_POSTS_LIST)
    if (res == undefined) return null;
    return (
        <>
            <GridSystem columns={[2, 2, 3]} data={res.data} path={"/lab"} gap={10} />
        </>
    )
}

export default Lab;