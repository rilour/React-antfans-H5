import React from 'react'
import { Swiper } from 'antd-mobile'
import data from './swiper.json'
import { Route } from 'react-router-dom'


const items = data.result.bannerList.map((item, index) => (
    <Route>
        <img 
            className="swiper-img"
            id={item.configurationNo} 
            src={item.imageUrl} 
            onClick={() => {<Link to={item.jumpUrl} />}}
        >
        {item.configurationTitle}
        </img>
    </Route>

))

function HomeSwiper() {
    return (
        <Swiper autoplay={true} slideSize={85} stuckAtBoundary={false}>{items}</Swiper>

    )
}



export default HomeSwiper