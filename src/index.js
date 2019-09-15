import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home/index'
import BaseLayout from './components/BaseLayout'
import EmptyLayout from './components/EmptyLayout'
import Event from './components/Event/index'
import Kegiatan from './components/Kegiatan/index'
import Gallery from './components/Gallery/index'
import MyProfile from './components/MyProfile/index'
import AboutUs from './components/AboutUs/index'
import Login from './components/Login/index'

import Datadiri from './components/MyProfile/components/DataDiri/index'
import Programku from './components/MyProfile/components/Programku/index'

import LoginAdmin from './components/AdminPage/Login/index'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path={["/","/Event","/Kegiatan","/Gallery","/AboutUs","/Login"]}>
                <BaseLayout>
                    <Route exact path="/" component={Home} />
                    <Route path="/Event" component={Event}/>
                    <Route path="/Kegiatan" component={Kegiatan}/>
                    <Route path="/Gallery" component={Gallery}/>
                    <Route path="/AboutUs" component={AboutUs}/>
                    <Route path="/Login" component={Login}/>
                </BaseLayout>
            </Route>
            <Route path={["/MyProfile/","/MyProfile/Programku"]}>
                <BaseLayout>
                    <MyProfile>
                        <Route exact path="/MyProfile/" component={Datadiri} />
                        <Route path="/Myprofile/Programku" component={Programku} />
                    </MyProfile>
                </BaseLayout>
            </Route>
            <Route path={["/AdminLogin"]}>
                <EmptyLayout>
                    <Route exact path="/AdminLogin" component={LoginAdmin}/>
                </EmptyLayout>
            </Route>
        </Switch>
    </BrowserRouter>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
