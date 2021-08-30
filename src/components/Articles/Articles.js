import React from 'react'
import ArticlesItem from './ArticlesItem'
import ArticlesArray from './ArticlesArray'
import './Articles.css'

const Articles = () => {
    return (
        <div className="container">
            <div className="row3">
                {ArticlesArray.map((article) => (
                    <ArticlesItem
                        key={article.id}
                        imaje={article.imaje}
                        title={article.title}
                        description={article.description}
                    />
                ))}
            </div>
        </div>
    )
}
export default Articles
