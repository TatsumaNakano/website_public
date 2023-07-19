import React, { Component } from 'react'
import Layout from '../components/layout'
import GridSystem from '../components/grid/index';
import { graphql } from 'gatsby';


interface propsType {
  data: any
}

export default class index extends Component<propsType>{
  render() {
    console.log(this.props.data)
    return (
      <Layout>
        <GridSystem columns={3} data={this.props.data} />
      </Layout>
    )
  }
}

export const query = graphql`
query MyQuery {
  allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "work"}}}}}) {
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
