import React, { Component } from 'react'
import Layout from '../../components/layout'
import GridSystem from '../../components/grid';
import { graphql } from 'gatsby';

interface propsType {
  data: any
}

export default class Blog extends Component<propsType>{
  render() {
    return (
      <Layout>
        <GridSystem columns={2} data={this.props.data} />
      </Layout>
    )
  }
}

export const query = graphql`
query MyQuery {
  allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "blog"}}}}}) {
    nodes {
      post_setting {
        height
        width
      }
      title
      date
    }
  }
}
`;
