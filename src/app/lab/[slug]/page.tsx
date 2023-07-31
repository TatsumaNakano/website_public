
import { GET_POST, fetchGQL } from "@/graphql/queries";
import Post from "@/components/post";

export default async (props: any) => {

    const slug = props.params.slug;

    const res = await fetchGQL(GET_POST(slug));

    return <Post data={res.data} />;
}
