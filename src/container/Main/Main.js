import React from 'react'
import { Route } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'
import Articles from '../../components/Articles/Articles'
import Posts from '../../components/Posts/Posts'
import SliderArticles from '../../components/SliderArticles/SliderArticles'
import ViewallBtn from '../../components/ViewallBtn/ViewallBtn'
import SliderAbout from '../../components/SliderAbout/SliderAbout'
import AboutPaje from '../../pajes/About/AboutPaje'
import BreakfastPaje from '../../pajes/BreakfastPaje/BreakfastPaje'
import LunchPaje from '../../pajes/LunchPaje/LunchPaje'
import DinnerPaje from '../../pajes/DinnerPaje/DinnerPaje'

const Main = ({ likeButtonsState, changeLike }) => {
    return (
        <div>
            <Route path="/about" component={AboutPaje} />
            <Route path="/breakfast" component={BreakfastPaje} />
            <Route path="/lunch" component={LunchPaje} />
            <Route path="/dinner" component={DinnerPaje} />
            <Route path="/home" component={Slider} />
            <Route path="/home" component={Posts} />
            <Route path="/home" component={ViewallBtn} />
            <Route path="/home" component={SliderArticles} />
            <Route path="/home" component={Articles} />
            <Route path="/home" component={SliderAbout} />
        </div>
    )
}
export default Main
