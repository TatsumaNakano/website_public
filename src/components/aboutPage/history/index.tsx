import React, { Component } from 'react'
import HistoryItem from './historyItem';
import * as styles from './styles.module.scss';

export default class History extends Component {
    render() {
        return (
            <div className={styles.history}>
                <h1>Experiences & Education</h1>
                {history.map((item, index) => {
                    return <HistoryItem key={index} data={item} isCurrent={index == 0} />
                })}
            </div>
        )
    }
}

var history = [
    {
        time: "Jun 2023 - Current",
        title: "Freelance Designer/Developer",
        organization: "",
        description: "Trying things that I could not challenge as working in the coorporate. Learning more for making more."
    },
    {
        time: "Feb 2018 - Feb 2023",
        title: "Creative Technologist",
        organization: "iBelieveSwordfish Inc.",
        description: `I worked on comprehensive tasks including Web Development, 3D layout, Lighting, Rendering, Visual Development, Asset Management, VR Development, Blender render-farm integration. Used numerous softwares including Cinema 4D, Houdini, Blender, AfterEffects and more.`
    },
    {
        time: "Jun 2017 - Dec 2017",
        title: "Creative Intern",
        organization: "iBelieveSwordfish Inc.",
        description: `My responsibility was to make a VR experience using Unity and 360 video player plugin from Pixavana. Created an experience that user can move around hotspots in San Francisco.`
    },
    {
        time: "Jan 2014 - Dec 2017",
        title: "Bachelor of Fine Art | Web Design & New Media",
        organization: "Academy of Art University",
        description: `My responsibility was to make a VR experience using Unity and 360 video player plugin from Pixavana. Created an experience that user can move around hotspots in San Francisco.`
    },
]
