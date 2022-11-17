import { TabBar } from 'antd-mobile';
import { UserOutline, AppOutline, AppstoreOutline, PictureOutline } from 'antd-mobile-icons';
import { Route, Routes, useLocation, useNavigate, Link } from "react-router-dom"
import DigitalCollection from './homeContent/digitalcollection'
import './homeMenu-style.css'

function HomeMenu () {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <div className="home-menu">
            {/* <button onClick={ () => {navigate('/')} }>首页</button>
            <button onClick={ () => {navigate('/discovery')}}>发现</button>
            <button onClick={ () => {navigate('/collection')} }>收藏</button>
            <button onClick={ () => {navigate('/mine')} }>我的</button> */}

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/discovery' element={<Discovery />}></Route>
                <Route path='/collection' element={<Collection />}></Route>
                <Route path='/mine' element={<Mine />}></Route>
            </Routes>
            <TabBar className='tabbar' activeKey={pathname} onChange={(key) => {navigate(key)}} >
                <TabBar.Item className='tabbaritem home' title="首页" key='/' icon={<AppOutline />} />
                <TabBar.Item className='tabbaritem discovery' title="发现" key='/discovery' icon={<AppstoreOutline />} />
                <TabBar.Item className='tabbaritem collection' title="收藏" key='/collection' icon={<PictureOutline />} />
                <TabBar.Item className='tabbaritem mine' title="我的" key='/mine' icon={<UserOutline />} />
            </TabBar>
        </div>

    )
}



function Home() {
    return (
        <>
            <DigitalCollection />
        </>
    )
}

function Discovery() {
    return (
        <>
            4854563
        </>
    )
}

function Collection() {
    return (
        <>
            <nav>
                
            </nav>
        </>
    )
}


function Mine() {
    return (
        <>
            <nav>
                
            </nav>
        </>
    )
}


export default HomeMenu