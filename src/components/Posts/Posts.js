import React from 'react'
import PostsItem from './PostsItem'
import './Posts.css'
import PostsArray from './PostsArray'

const Posts = ({ likeButtonsState, changeLike }) => {
    return (
        <>
            <div className="container-posts">
                <div className="row2">
                    {PostsArray.map((post) => (
                        <PostsItem
                            key={post.id}
                            imaje={post.imaje}
                            title={post.title}
                            description={post.description}
                            category={post.category}
                            id={post.id}
                            changeLike={changeLike}
                            likeButtonsState={likeButtonsState}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Posts
