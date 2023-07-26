import { GET_POST, fetchGQL } from "@/graphql/queries";
import client from "../../../lib/apolloClient"
import { gql } from "@apollo/client"

export default async (props: any) => {

    const slug = props.params.slug;

    const res = await fetchGQL(GET_POST(slug))

    return (
        <div>
            <h1>{res.data.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: res.data.post.content }}></div>
        </div>
    );
}