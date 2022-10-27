import React from 'react'
import { Swiper } from 'antd-mobile'
import data from './swiper.json'

const items = data.result.bannerList.map((item, index) => (
    <img 
        className="swiper-img"
        id={item.configurationNo} 
        src={item.imageUrl} 
        onClick={() => {<Link to={item.jumpUrl} />}}
    >
    {item.configurationTitle}
    </img>
))

function HomeSwiper() {
    return (
        <Swiper autoplay={true} slideSize={80} stuckAtBoundary={false}>{items}</Swiper>

    )
}



export default HomeSwiper()