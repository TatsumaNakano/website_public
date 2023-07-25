import React, { Component } from 'react'
import HistoryItem from './historyItem';
import styles from './styles.module.scss';

export default () => {
    return (
        <div className={styles.history}>
            <h1>Experiences & Education</h1>
            {history.map((item, index) => {
                return <HistoryItem key={index} data={item} isCurrent={index == 0} />
            })}
        </div>
    )
}

var history = [
    {
        time: "Jun 2023 - Current",
        title: "Freelance Designer/Developer",
        organization: "",
        description: "Trying things that I could not challenge while working in the corporate world, learning more to make more."
    },
    {
        time: "Feb 2018 - Feb 2023",
        title: "Creative Technologist",
        organization: "iBelieveSwordfish Inc.",
        description: `I have worked on comprehensive tasks, including web development, 3D layout, lighting, rendering, visual development, asset management, VR development, and Blender render-farm integration. I have used numerous software programs, including Cinema 4D, Houdini, Blender, After Effects, and more.`
    },
    {
        time: "Jun 2017 - Dec 2017",
        title: "Creative Intern",
        organization: "iBelieveSwordfish Inc.",
        description: `My responsibility was to create a VR experience using Unity and the 360 video player plugin from Pixavana. I crafted an interactive experience where users can navigate around hotspots in San Francisco.`
    },
    {
        time: "Jan 2014 - Dec 2017",
        title: "Bachelor of Fine Art | Web Design & New Media",
        organization: "Academy of Art University",
        description: `I have studied UI/UX designs, primarily for websites and mobile applications, along with programming for these projects. Additionally, I have experience in VR/AR development.`
    },
]
