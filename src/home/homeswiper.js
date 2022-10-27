import React from 'react'
import { Space, Swiper } from 'antd-mobile'
import data from './swiper.json'

function HomeSwiper() {
    console.log(data)
    return (
        <Swiper autoplay={true} slideSize={80} stuckAtBoundary={false} />

    )
}



export default HomeSwiper()