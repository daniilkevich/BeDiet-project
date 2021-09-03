import React from 'react'
import PostsArray from './PostsArray'
import PostsItem from './PostsItem'
import './Posts.css'

const Posts = () => {
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
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Posts
