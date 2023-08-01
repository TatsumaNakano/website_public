import { GET_POST, fetchGQL } from "@/graphql/queries";
// import styles from "@/styles/post.module.scss"
import Post from "@/components/post";

const WorkPost = async function (props: any) {

    const slug = props.params.slug;

    const res = await fetchGQL(GET_POST(slug));

    return <Post data={res.data} />;
}

export default WorkPost;