import React, { Component } from 'react'

export default class LoginAdmin extends Component {
    render() {
        return (
            <div>
                <div className="loginContainer">
                    <div className="loginContentBox" >
                        <h1 className="loginHeaderText1" >
                            Welcome Admin
                        </h1>
                        <input className="loginInput1" placeholder="Username" />
                        <input className="loginInput1" placeholder="Password" type="Password"  />
                        <button className="loginButton1">
                            Login
                        </button>
                        {/* <div className="loginItemBox" >
                            
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
