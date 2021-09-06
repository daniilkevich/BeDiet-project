import React from 'react'
import './SliderAbout.css'

const SliderAbout = () => {
    return (
        <div className="slider-section">
            <div className="slider">
                <img
                    className="slider-img"
                    src="./imajes/slider3.jpg"
                    alt="nice"
                ></img>
            </div>
            <div className="slider-title">
                Maecenas eleifend erat at justo fringilla imperdiet id ac magna.
                Suspendisse vel facilisis odio, at ornare malesuada.
            </div>
            <div className="button-wrapper">
                <button className="slider-btn">
                    Read more about our amazing team
                </button>
            </div>
        </div>
    )
}
export default SliderAbout
