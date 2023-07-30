import { GET_POST, fetchGQL } from "@/graphql/queries";
import styles from "@/styles/post.module.scss"

export default async (props: any) => {

    const slug = props.params.slug;

    const res = await fetchGQL(GET_POST(slug))

    console.log(typeof (res.data.post.content))

    return (
        <div className={styles.post}>
            <h1>{res.data.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: res.data.post.content }}></div>
        </div>
    );
}