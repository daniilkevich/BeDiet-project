import React from 'react'
import './ArticlesItem.css'

const ArticlesItem = (props) => {
    return (
        <div className="food-post col-dt-5">
            <div className="food-post-img-wrapper">
                <img
                    src={props.imaje}
                    alt="nice"
                    className="food-post-img"
                ></img>
            </div>
            <div className="food-post-title">{props.title}</div>
            <div className="food-post-font-icon">--</div>
            <div className="food-post-content">{props.description}</div>
            <div className="food-post-btn">
                <button className="post-btn">Read more</button>
            </div>
        </div>
    )
}
export default ArticlesItem
