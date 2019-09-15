import React, { Component } from 'react'
import './index.css'
import {FaChevronRight} from 'react-icons/fa'
import img1 from '../img/wp1.jpg'
import img2 from '../img/wp2.jpg'
import img3 from '../img/wp3.jpg'

export default class Kegiatan extends Component {
    render() {
        return (
            <div>
                <div className="kegiatanHeaderBox">
                    <h1 className="eventHeaderText1" >
                        Program Kegiatan
                    </h1>
                </div>
                <div className="kegiatanContentBox" >
                    <div className="kegiatanBoxItems" >
                        <img src={img2} className="kegiatanImage1" />
                        <div className="kegiatanItem" >
                            <h3 className="kegiatanItemText1" >
                                Tellus Eget Mollis Rutrum
                            </h3>
                            <p className="kegiatanItemText2" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh.
                            </p>
                            <div className="kegiatanButton bounce-2" >
                                <p className="kegiatanItemText3" >
                                    Read More
                                </p>
                                <FaChevronRight className="kegiatanIcon" />
                            </div>
                        </div>
                    </div>
                    <div className="kegiatanBoxItems" >
                        <img src={img3} className="kegiatanImage1" />
                        <div className="kegiatanItem" >
                            <h3 className="kegiatanItemText1" >
                                Tellus Eget Mollis Rutrum
                            </h3>
                            <p className="kegiatanItemText2" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh.
                            </p>
                            <div className="kegiatanButton bounce-2" >
                                <p className="kegiatanItemText3" >
                                    Read More
                                </p>
                                <FaChevronRight className="kegiatanIcon" />
                            </div>
                        </div>
                    </div>
                    <div className="kegiatanBoxItems" >
                        <img src={img1} className="kegiatanImage1" />
                        <div className="kegiatanItem" >
                            <h3 className="kegiatanItemText1" >
                                Tellus Eget Mollis Rutrum
                            </h3>
                            <p className="kegiatanItemText2" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh.
                            </p>
                            <div className="kegiatanButton bounce-2" >
                                <p className="kegiatanItemText3" >
                                    Read More
                                </p>
                                <FaChevronRight className="kegiatanIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
