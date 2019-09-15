import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
import $ from 'jquery'
import logo from '../../../img/trisula_icon.png'

export default class NavBar extends Component {

    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        this.navbarScrolled()
    }
    
    navbarScrolled() {
        $(document).ready(function() {
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.navbarBox').addClass('solid')
                    $('.login').addClass('solid')
                } else {
                    $('.navbarBox').removeClass('solid')
                    $('.login').removeClass('solid')
                }
            })
        })
    }
    
    render(){
        return(
            <nav className="Navbar navbarBox" >
                <NavLink exact to="/"><img src={logo} alt='Probi Trisula Logo' className="navLogo" /></NavLink>
                <ul className="nav-opt" >
                    <li className="navli" ><NavLink activeClassName="selected" className="nav-link" exact to="/"><a className="navText" >Home</a></NavLink></li>
                    <li className="navli" ><NavLink activeClassName="selected" className="nav-link" to="/Event"><a className="navText"className="navText">Event</a></NavLink></li>
                    <li className="navli" ><NavLink activeClassName="selected" className="nav-link" to="/Kegiatan"><a className="navText">Kegiatan</a></NavLink></li>
                    <li className="navli" ><NavLink activeClassName="selected" className="nav-link" to="/Gallery"><a className="navText">Gallery</a></NavLink></li>
                    <li className="navli" ><NavLink activeClassName="selected" className="nav-link" to="/AboutUs"><a className="navText">About Us</a></NavLink></li>
                    <li className="navli" ><NavLink activeClassName="selected" className="nav-link" to="/MyProfile/"><a className="navText">My Profile</a></NavLink></li>
                </ul>
                <NavLink exact to="/Login"><button className="login" >Login</button></NavLink>
            </nav>
        )
    }
}
