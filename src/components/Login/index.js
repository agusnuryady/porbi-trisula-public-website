import React, { Component } from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="loginContainer">
                    <div className="loginContentBox" >
                        <h1 className="loginHeaderText1" >
                            Welcome
                        </h1>
                        <input className="loginInput1" placeholder="Username" />
                        <input className="loginInput1" placeholder="Password" type="Password"  />
                        <button className="loginButton1">
                            Login
                        </button>
                        <NavLink exact to="/AdminLogin" className="loginButton1" >
                            Login As Admin
                        </NavLink>
                        {/* <div className="loginItemBox" >
                            
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
