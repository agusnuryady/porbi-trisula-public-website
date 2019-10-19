import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
import logo from '../../../img/trisula.png'
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaMapMarker, FaPhone} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'

export default class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="footerBox" >
                <div className="footerItem1" >
                    <div className="footerContent1" >
                        <img src={logo} className="footerLogo" />
                        <p className="footerText1" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis sit amet enim quis venenatis. Pellentesque finibus sed tortor ultricies pharetra. Donec eget congue ex. Mauris ultricies dui ornare, sagittis turpis vel, condimentum mi.
                        </p>
                        <div className="footerIconBox" >
                            <FaInstagram
                                className="footerIcons"
                            />
                            <FaFacebook
                                className="footerIcons"
                            />
                            <FaTwitter
                                className="footerIcons"
                            />
                            <FaYoutube
                                className="footerIcons"
                            />
                        </div>
                    </div>
                    <div className="footerContent2" >
                        <h2 className="footerText2" > 
                            CONTACT US
                        </h2>
                        <div className="footerContactBox" >
                            <FaMapMarker className="footerIcons" />
                            <p className="footerText3" >11850 Duri Semanan, Kalideres, West Jakarta</p>
                        </div>
                        <div className="footerContactBox" >
                            <FaPhone className="footerIcons" />
                            <p className="footerText3" >+62-822-1622-0822</p>
                        </div>
                        <div className="footerContactBox" >
                            <IoMdMail className="footerIcons" />
                            <p className="footerText3" >porbi.trisula@example.co.id</p>
                        </div>
                    </div>
                    <div className="footerContent3" >
                        <h2 className="footerText2" > 
                            SITEMAP
                        </h2>
                            <NavLink activeClassName="selected" className="footerText3" to="/Event">Event</NavLink>
                            <NavLink activeClassName="selected" className="footerText3" to="/Kegiatan">Kegiatan</NavLink>
                            <NavLink activeClassName="selected" className="footerText3" to="/Gallery">Gallery</NavLink>
                            {/* <NavLink activeClassName="selected" className="footerText3" to="/MyProfile">My Profile</NavLink> */}
                            <NavLink activeClassName="selected" className="footerText3" to="/AboutUs">About Us</NavLink>
                    </div>
                </div>
                <div className="footerItem2" >
                    <h5 className="footerText" >
                        @PORBI TRISULA 2019 ALL RIGHTS RESERVED, Created By @agusnuryady
                    </h5>
                </div>
            </div>
        )
    }
}
