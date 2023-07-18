import React, { Component } from 'react'
import Header from '../header'
import "../../styles/global.scss"
import * as styles from "./styles.module.scss"
import Widget from '../widget'
import Footer from '../footer'
// import { useLocation } from "@reach/router"


interface propsType {
    children: React.ReactNode,
}

export default class Layout extends Component<propsType> {

    constructor(props: propsType) {
        super(props)
        this.state = { foo: null }
    }

    componentDidMount(): void {
        // var loc = useLocation()
        // console.log(loc)
    }

    render() {
        // if(this.props.location.pathname == "")
        return (
            <>
                <Header />
                <div className={styles.contents}>{this.props.children}</div>
                <Widget />
                <Footer />
            </>
        )
    }
}
