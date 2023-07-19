import React, { Component } from 'react'
import * as styles from "./styles.module.scss"

export default class Hobbies extends Component {
    render() {
        return (
            <div className={styles.hobbies}>
                <h1>Hobbies</h1>
                <div>
                    <p>My hobby is playing with computers. I also enjoy hikes. I also have PADI open-water license.</p>
                    <p></p>

                </div>
            </div>
        )
    }
}
