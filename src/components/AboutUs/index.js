import React, { Component } from 'react'
import './index.css'
import trisula from '../img/trisula.png'
import img1 from '../img/wp1.jpg'
import img2 from '../img/wp2.jpg'
import img3 from '../img/wp3.jpg'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="aboutHeaderBox">
                    <h1 className="aboutHeaderText1" >
                        About Us
                    </h1>
                </div>
                <div className="aboutContentBox" >
                    <div className="aboutContentItem7" >
                        <div className="aboutContentItem1" >
                            <div className="aboutSubItem1" >
                                <h1 className="aboutTextItem1" >
                                    Sejarah
                                </h1>
                                <p className="aboutTextItem2" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh. Mauris euismod mauris a massa rutrum, quis tempor sem bibendum. Nunc sollicitudin nisi venenatis velit tempus fringilla. Mauris pellentesque, justo nec consequat dignissim, ante orci elementum neque, et luctus eros lorem at lacus. Nullam tellus ligula, vehicula nec quam ut, semper lobortis nisl.
                                </p>
                            </div>
                            <div className="aboutSubItem2" >
                                <img src={trisula} className="aboutImageItem1" />
                            </div>
                        </div>
                    </div>
                    <div className="aboutContentItem2" >
                        <div className="aboutContentItem3" >
                            <h1 className="aboutTextItem1" >
                                Visi
                            </h1>
                            <p className="aboutTextItem2" >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh.
                            </p>
                        </div>
                        <div className="aboutContentItem3" >
                            <h1 className="aboutTextItem1" >
                                Misi
                            </h1>
                            <div className="aboutSubItem3" >
                                <p className="aboutTextItem2" >
                                    # Consectetur adipiscing elit
                                </p>
                                <p className="aboutTextItem2" >
                                    # Donec mollis augue sed ante
                                </p>
                                <p className="aboutTextItem2" >
                                    # Sed purus justo, euismod sit amet lorem
                                </p>
                                <p className="aboutTextItem2" >
                                    # Sed pretium augue felis a nibh
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutContentItem4" >
                        <h1 className="aboutTextItem1" >
                            Program Kami
                        </h1>
                        <div className="aboutContentItem6" >
                            <div className="aboutContentItem5 wp2" >
                                <h1 className="aboutTextItem3" >
                                    Pancak Silat
                                </h1>
                            </div>
                            <div className="aboutContentItem5 wp3" >
                                <h1 className="aboutTextItem3" >
                                    Koperasi UMKM
                                </h1>
                            </div>
                            <div className="aboutContentItem5 wp1" >
                                <h1 className="aboutTextItem3" >
                                    Bakti Sosial
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
