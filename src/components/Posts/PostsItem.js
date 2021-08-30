import React from 'react'
import './PostsItem.css'

const PostsItem = (props) => {
    return (
        <div className="post-block col-dt-4">
            <div className="img-block">
                <img src={props.imaje} className="recept-img"></img>
            </div>
            <div className="descr-block">
                <div className="header-descr-block">{props.title}</div>
                <div className="main-descr-block">{props.description}</div>
                <div className="footer-descr-block">
                    <button>
                        <a>like</a>
                    </button>
                    <button>
                        <a>reed more</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default PostsItem
