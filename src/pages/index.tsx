import React, { Component } from 'react'
import Layout from '../components/layout'
import GridSystem from '../components/grid/index';


export default class index extends Component {
  render() {
    return (
      <Layout>
        <GridSystem columns={3} data={foo} />
      </Layout>
    )
  }
}

var foo = [
  {
    title: "DEMOREEL",
    description: "Lorem ipsum",
    width: 1,
    height: 1
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 2,
    height: 1
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 2,
    height: 1
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 1,
    height: 2
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 1,
    height: 1
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 1,
    height: 2
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 1,
    height: 1
  },

  {
    title: "Title",
    description: "Lorem ipsum",
    width: 1,
    height: 1
  },

  {
    title: "Title",
    description: "Lorem ipsum",
    width: 2,
    height: 1
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 1,
    height: 2
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 1,
    height: 1
  },
  {
    title: "Title",
    description: "Lorem ipsum",
    width: 1,
    height: 1
  }
]