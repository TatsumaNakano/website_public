
export const fetchGQL = async (query: string) => {
  return await fetch(
    "https://cm5y5tem.tatsuma.co/56f1640ab297138e177caa3c684c1c6e",
    {
      method: "POST",
      body: JSON.stringify({
        query: query,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60
      }
    }
  ).then((res) => res.json());
}

export const GET_WORK_POSTS_LIST = `
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

export const GET_PRODUCTS_POSTS_LIST = `
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

export const GET_BLOG_POSTS_LIST = `
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
  return `
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
    `;
}
