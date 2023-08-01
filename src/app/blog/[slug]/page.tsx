
import { GET_POST, fetchGQL } from "@/graphql/queries";
import Post from "@/components/post";
import styles from "./styles.module.scss";
import SideBar from "@/components/sideBar";

const BlogPost = async function (props: any) {

    const slug = props.params.slug;

    const res = await fetchGQL(GET_POST(slug));

    return (
        <div className={styles.blog}>
            <Post data={res.data} />
            <SideBar />
        </div>
    );
}

export default BlogPost;