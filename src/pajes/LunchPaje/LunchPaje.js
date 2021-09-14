import React from 'react'
import PostsArray from '../../components/Posts/PostsArray'
import PostsItem from '../../components/Posts/PostsItem'
const LunchPaje = (post) => {
    return (
        <div>
            <div className="row2">
                {PostsArray.filter((item) => item.category === 'Lunch').map(
                    (post) => (
                        <PostsItem
                            key={post.id}
                            imaje={post.imaje}
                            title={post.title}
                            description={post.description}
                            category={post.category}
                        />
                    )
                )}
            </div>
        </div>
    )
}
export default LunchPaje
