import React from 'react'
import './PostsItem.css'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
const styles = {
    icon: {
        position: 'absolute',
        bottom: '7px',
        right: '-15px',
    },
}

const PostsItem = ({
    id,
    imaje,
    title,
    description,
    category,
    changeLike,
    likeButtonsState,
    isLiked = true,
}) => {
    return (
        <div className="post-block col-dt-4">
            <div className="img-block">
                <img src={imaje} alt="nice" className="recept-img"></img>
            </div>
            <div className="descr-block">
                <div className="header-descr-block">{title}</div>
                <div className="main-descr-block">{description}</div>
                <div className="footer-descr-block">
                    <div className="rowfooter">
                        <div className="like-btn">
                            <Button>
                                {isLiked ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </Button>
                        </div>
                        <div className="category-wrapper">
                            <Link to="/breakfast">{category}</Link>
                        </div>
                        <div className="reedmore-btn">
                            <AssignmentIcon style={styles.icon} />
                            <a href="/#">Reed more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostsItem
