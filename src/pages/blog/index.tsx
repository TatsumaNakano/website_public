import React, { Component } from 'react'
import Layout from '../../components/layout'
import GridSystem from '../../components/grid';

var foo = [
    {
        title: "Title",
        description: "Lorem ipsum",
        width: 1
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
        width: 1
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

]

export default class Blog extends Component {
    render() {
        return (
            <Layout>
                <GridSystem columns={2} data={foo} />
            </Layout>
        )
    }
}
