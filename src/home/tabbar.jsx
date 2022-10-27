import React from "react";
import { UserOutline, AppOutline, AppstoreOutline, PictureOutline  } from 'antd-mobile-icons';
import { Router, Routers, useLocation, useNavigate} from "react-router-dom"


function TabBar (props) {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    return (
        <div className="tabBar">
            <Routers>
                <Router path='/' element={<Home />}></Router>
                <Router path='/discovery' element={<Discovery />}></Router>
                <Router path='/collection' element={<Collection />}></Router>
                <Router path='/mine' element={<Mine />}></Router>
            </Routers>
            <TabBar>
                <TabBar.item title="首页" key='/' icon={<AppOutline />} />
                <TabBar.item title="发现" key='/discovery' icon={<AppstoreOutline />} />
                <TabBar.item title="收藏" key='/collection' icon={<PictureOutline />} />
                <TabBar.item title="我的" key='/mine' icon={<UserOutline />} />
            </TabBar>
        </div>

    )
}



function Home() {
    return (
        <>
            <nav>
                <Link to="/" />
            </nav>
        </>
    )
}

function Discovery() {
    return (
        <>
            <nav>
                <Link to="/discovery" />
            </nav>
        </>
    )
}

function Collection() {
    return (
        <>
            <nav>
                <Link to="/collection" />
            </nav>
        </>
    )
}

function Mine() {
    return (
        <>
            <nav>
                <Link to="/mine" />
            </nav>
        </>
    )
}