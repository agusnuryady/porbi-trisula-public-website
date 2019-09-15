import React, { Component } from 'react'
import './index.css'
import img2 from '../img/wp2.jpg'
import {FaUser, FaHome, FaMapMarker, FaCalendar, FaClock} from 'react-icons/fa'

export default class Event extends Component {
    render() {
        return (
            <div>
                <div className="eventHeaderBox">
                    <h1 className="eventHeaderText1" >
                        Event List
                    </h1>
                </div>
                <div className="eventContentBox" >
                    <div className="eventBoxItems" >
                        <img src={img2} className="eventImage" />
                        <div className="eventItemContent" >
                            <div className="eventContentLine1" />
                            <h3 className="eventContentText1" >
                                Tellus Eget Mollis Rutrum
                            </h3>
                            <p className="eventContentText2" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh.
                            </p>
                            <div className="eventSubContent" >
                                <FaUser className="eventIcons" />
                                <p className="eventContentText3" >
                                    Admin
                                </p>
                            </div>
                            <div className="eventSubContent" >
                                <FaHome className="eventIcons" />
                                <p className="eventContentText3" >
                                    Kampus Mercubuana
                                </p>
                            </div>
                            <div className="eventSubContent" >
                                <FaMapMarker className="eventIcons" />
                                <p className="eventContentText3" >
                                    Jl. Daan Mogot KM 11
                                </p>
                            </div>
                            <div className="eventContentLine2">
                                <div className="eventSubContent2" >
                                    <FaCalendar className="eventIcons" />
                                    <p className="eventContentText3" >
                                        17 Augustus 2019
                                    </p>
                                </div>
                                <div className="eventSubContent2" >
                                    <FaClock className="eventIcons" />
                                    <p className="eventContentText3" >
                                        08:00 A.m
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eventBoxItems" >
                        <img src={img2} className="eventImage" />
                        <div className="eventItemContent" >
                            <div className="eventContentLine1" />
                            <h3 className="eventContentText1" >
                                Tellus Eget Mollis Rutrum
                            </h3>
                            <p className="eventContentText2" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh.
                            </p>
                            <div className="eventSubContent" >
                                <FaUser className="eventIcons" />
                                <p className="eventContentText3" >
                                    Admin
                                </p>
                            </div>
                            <div className="eventSubContent" >
                                <FaHome className="eventIcons" />
                                <p className="eventContentText3" >
                                    Kampus Mercubuana
                                </p>
                            </div>
                            <div className="eventSubContent" >
                                <FaMapMarker className="eventIcons" />
                                <p className="eventContentText3" >
                                    Jl. Daan Mogot KM 11
                                </p>
                            </div>
                            <div className="eventContentLine2">
                                <div className="eventSubContent2" >
                                    <FaCalendar className="eventIcons" />
                                    <p className="eventContentText3" >
                                        17 Augustus 2019
                                    </p>
                                </div>
                                <div className="eventSubContent2" >
                                    <FaClock className="eventIcons" />
                                    <p className="eventContentText3" >
                                        08:00 A.m
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eventBoxItems" >
                        <img src={img2} className="eventImage" />
                        <div className="eventItemContent" >
                            <div className="eventContentLine1" />
                            <h3 className="eventContentText1" >
                                Tellus Eget Mollis Rutrum
                            </h3>
                            <p className="eventContentText2" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh.
                            </p>
                            <div className="eventSubContent" >
                                <FaUser className="eventIcons" />
                                <p className="eventContentText3" >
                                    Admin
                                </p>
                            </div>
                            <div className="eventSubContent" >
                                <FaHome className="eventIcons" />
                                <p className="eventContentText3" >
                                    Kampus Mercubuana
                                </p>
                            </div>
                            <div className="eventSubContent" >
                                <FaMapMarker className="eventIcons" />
                                <p className="eventContentText3" >
                                    Jl. Daan Mogot KM 11
                                </p>
                            </div>
                            <div className="eventContentLine2">
                                <div className="eventSubContent2" >
                                    <FaCalendar className="eventIcons" />
                                    <p className="eventContentText3" >
                                        17 Augustus 2019
                                    </p>
                                </div>
                                <div className="eventSubContent2" >
                                    <FaClock className="eventIcons" />
                                    <p className="eventContentText3" >
                                        08:00 A.m
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
