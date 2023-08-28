
import { GET_LAB_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import Grid from '../../components/GridSystem/Grid';
import styles from "./styles.module.scss";
import { GridType } from '@/type/gridsystem';

import { Metadata, ResolvingMetadata } from 'next'

const Lab = async function () {

    const res = await fetchGQL(GET_LAB_POSTS_LIST)
    if (res == undefined) return null;
    return (
        <>
            <Grid type={GridType.lab} columns={[2, 3, 3]} posts={res.data.posts.nodes} path={"/lab"} />
        </>
    )
}

type Props = {
    params: { slug: string }
}


export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    return {
        alternates: {
            // canonical: "/",
            languages: {
                "x-default": `https://tatsuma.co/lab/`,
                "en": `https://en.tatsuma.co/lab/`,
                "ja": `https://ja.tatsuma.co/lab/`,
            }
        }
    }
}


export default Lab;