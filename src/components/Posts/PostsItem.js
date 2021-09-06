import React from 'react'
import './PostsItem.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AssignmentIcon from '@material-ui/icons/Assignment'
const styles = {
    icon: {
        position: 'absolute',
        bottom: '7px',
        right: '-15px',
    },
}
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
                    <div className="rowfooter">
                        <div className="like-btn">
                            <a href="#">
                                <FavoriteBorderIcon />
                            </a>
                        </div>
                        <div>{props.category}</div>
                        <div className="reedmore-btn">
                            <AssignmentIcon style={styles.icon} />
                            <a href="#">Reed more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostsItem
