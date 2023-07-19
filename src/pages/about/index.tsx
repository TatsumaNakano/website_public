import React, { Component } from 'react'
import Layout from '../../components/layout'
import GridSystem from '../../components/grid';
import * as styles from "./styles.module.scss"
import Skills from '../../components/aboutPage/skills';
import Certificates from '../../components/aboutPage/certificates';
import History from '../../components/aboutPage/history';
import Hobbies from '../../components/aboutPage/hobbies';

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
                <Hobbies />

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

