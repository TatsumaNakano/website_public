

import React, { Component } from 'react'
// import GridSystem from '../../components/grid';

import Intro from "../../components/aboutPage/intro"
import Skills from '../../components/aboutPage/skills';
import Certificates from '../../components/aboutPage/certificates';
import History from '../../components/aboutPage/history/page';
import Hobbies from '../../components/aboutPage/hobbies';
import Reference from "../../components/aboutPage/reference"


import { Metadata, ResolvingMetadata } from 'next'


const About = function () {

    return (
        <>
            <Intro />
            <Skills />
            <History />
            <Certificates />
            <Reference />
            <Hobbies />
        </>
    )
}


type Props = {
    params: { slug: string }
}


export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    return {
        alternates: {
            // canonical: "/",
            languages: {
                "x-default": `https://tatsuma.co/about`,
                "en": `https://en.tatsuma.co/about`,
                "ja": `https://ja.tatsuma.co/about`,
            }
        }
    }
}

export default About;
