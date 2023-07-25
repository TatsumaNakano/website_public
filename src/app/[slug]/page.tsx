import { GET_POST } from "@/graphql/queries";
import client from "../../lib/apolloClient"
import { gql } from "@apollo/client"

export default async (props: any) => {

    const slug = props.params.slug;
    const res = await client.query({
        query: GET_POST(slug)
    })

    console.log(res)

    return (
        <div>
            <h1>{res.data.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: res.data.post.content }}></div>
        </div>
    );
}