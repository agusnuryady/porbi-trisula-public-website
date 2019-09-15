import React, { Component } from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'

export default class MyProfile extends Component {

    constructor(props){
        super(props)
        // this.id = props.match.params.id
        // this.state = {
        //     id: props.match.params.id,
        // }
    }

    render() {
        return (
            <div>
                <div className="myProfileHeaderBox"/>
                <div className="myProfileContentBox" >
                    <div className="myProfileSideNavbarBox" >
                        <div className="myProfileAvatar" >

                        </div>
                        <p className="myProfileUsername" >
                            Rahmat Agus Nuryady
                        </p>
                        <ul className="myProfileMenu" >
                            <li className="myProfileMenuBox" >
                                <NavLink activeClassName="selected" className="myProfileMenuItem" exact to="/MyProfile/" >
                                    Data Diri
                                </NavLink>
                            </li>
                            <li className="myProfileMenuBox" >
                                <NavLink activeClassName="selected" className="myProfileMenuItem" to="/MyProfile/Programku" >
                                    Program Ku
                                </NavLink>
                            </li>
                            <li className="myProfileMenuBox" >
                                <NavLink className="myProfileMenuItem" >
                                    Laporan Nilai
                                </NavLink>
                            </li>
                            <li className="myProfileMenuBox" >
                                <NavLink className="myProfileMenuItem" >
                                    Penghargaan
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="myProfileItemBox" >
                        <section>
                            {this.props.children}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
