// 'use client'
import { GET_WORK_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import GridSystem from '../components/grid/page';
import styles from "./page.module.scss";

const App = async function () {

  const res = await fetchGQL(GET_WORK_POSTS_LIST)
  if (res == undefined) return null;

  return (
    <>
      <div className={styles.demoreel}>
        <div><h3 className="en">Demoreel</h3><h3 className="jp">デモリール</h3></div>
      </div>
      <GridSystem columns={1} data={res.data} path="" gap='50px' />
    </>
  )
}
export default App;
