import React, { Component } from 'react'
import {Container,} from 'react-bootstrap'
import './index.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default class BaseLayout extends Component {
    render() {
        return (
            <div className="main-container" >
                <NavBar/>
                <section>
                    {this.props.children}
                </section>
                {/* <div className="content" >
                </div> */}
                <Footer/>
            </div>
        )
    }
}
