import React from "react";
import { UserOutline, AppOutline, AppstoreOutline, PictureOutline  } from 'antd-mobile-icons';
import { Route, Routes, useLocation, useNavigate} from "react-router-dom"


function TabBar (props) {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    return (
        <div className="tabbar">
            <button onClick={ () => {navigate('/')} }>首页</button>
            <button onClick={ () => {navigate('/discovery')}}>发现</button>
            <button onClick={ () => {navigate('/collection')} }>收藏</button>
            <button onClick={ () => {navigate('/mine')} }>我的</button>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/discovery' element={<Discovery />}></Route>
                <Route path='/collection' element={<Collection />}></Route>
                <Route path='/mine' element={<Mine />}></Route>
            </Routes>
            <TabBar className='tabbar' activeKey={pathname} onchange={(key) => {navigate(key)}} >
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