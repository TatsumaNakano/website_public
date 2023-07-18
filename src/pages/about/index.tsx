import React, { Component } from 'react'
import Layout from '../../components/layout'
import GridSystem from '../../components/grid';
import * as styles from "./styles.module.scss"
import Skills from './skills';
import Certificates from './certificates';
import History from './history';

export default class About extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.intro}>
                    <div></div>
                    <h3>Hi! I'm Tatsuma.</h3>
                    <p>I am a freelance designer/developer living in Japan.</p>
                    <p>My Ikigai is making people happy with what I make.</p>
                </div>
                <History />
                <Skills />
                <Certificates />

            </Layout>
        )
    }
}

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

]

