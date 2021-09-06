import React from 'react'
import Slider from '../../components/Slider/Slider'
import Articles from '../../components/Articles/Articles'
import Posts from '../../components/Posts/Posts'
import SliderArticles from '../../components/SliderArticles/SliderArticles'
import ViewallBtn from '../../components/ViewallBtn/ViewallBtn'
import SliderAbout from '../../components/SliderAbout/SliderAbout'

const Main = () => {
    return (
        <div>
            <Slider />
            <Posts />
            <ViewallBtn />
            <SliderArticles />
            <Articles />
            <SliderAbout />
        </div>
    )
}
export default Main
