
export const fetchGQL = async (query: string) => {
  return await fetch(
    "https://cm5y5tem.tatsuma.co/graphql",
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
  ).then((res) => {
    return res.json()
  }).catch((err) => {
    console.error("err", err)
  });
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
        thumbnail {
          sourceUrl
        }
        thumbnailLores {
          sourceUrl
        }
        jptitle
        icon{
          sourceUrl
        }
        tagline
        taglineJp
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

export const GET_LAB_POSTS_LIST = `
{
  posts(where: {categoryName: "Lab"}) {
    nodes {
      title
      slug
      date
      post_setting {
        height
        width
        thumbnail {
          sourceUrl
        }
        jptitle
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
        thumbnail {
          sourceUrl
        }
        jptitle
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

export const GET_ALLPOSTS = `
{
  posts {
    nodes {
      content
      tags {
        nodes {
          name
        }
      }
      slug
      title
      post_setting {
        jptitle
        workAt
      }
      date
      categories {
        nodes {
          name
          slug
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
                post_setting {
                    jptitle
                    icon{
                      sourceUrl
                    }
                  workAt
                  }
            }
        }
    `;
}
