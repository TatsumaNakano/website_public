// 'use client'
import { GET_WORK_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import Grid from '../components/GridSystem/Grid';
import styles from "./page.module.scss";
import { GridType } from '@/type/gridsystem';

const App = async function () {

    const res = await fetchGQL(GET_WORK_POSTS_LIST)
    if (res == undefined) return null;

    return (
        <>
            {/* <div className={styles.demoreel}>
        <div><h3 className="en">Demoreel</h3><h3 className="jp">デモリール</h3></div>
      </div> */}
            <Grid columns={[1, 1, 1]} posts={res.data.posts.nodes} path={""} type={GridType.main} />
        </>
    )
}
export default App;