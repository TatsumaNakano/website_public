import { gql } from "@apollo/client"

export const GET_WORK_POSTS_LIST = gql`
{
  posts(where: {categoryName: "Work"}) {
    nodes {
      title
      slug
      date
      post_setting {
        height
        width
      }
      tags {
        nodes {
          slug
          name
        }
      }
    }
  }
}
`

export const GET_PRODUCTS_POSTS_LIST = gql`
{
  posts(where: {categoryName: "Products"}) {
    nodes {
      title
      slug
      date
      post_setting {
        height
        width
      }
      tags {
        nodes {
          slug
          name
        }
      }
    }
  }
}
`

export const GET_BLOG_POSTS_LIST = gql`
{
  posts(where: {categoryName: "Blog"}) {
    nodes {
      title
      slug
      date
      post_setting {
        height
        width
      }
      tags {
        nodes {
          slug
          name
        }
      }
    }
  }
}
`

export const GET_POST = (id: string) => {
    const query = gql`
        {
            post(idType: SLUG, id: "${id}") {
                title
                content
                tags {
                nodes {
                    id
                    name
                }
                }
                date
            }
        }
    `

    return query
}
