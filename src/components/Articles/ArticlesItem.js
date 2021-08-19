import { Button } from '@material-ui/core'
import React from 'react'
import './ArticlesItem.css'

const ArticlesItem = () => {
    return (
        <div>
            <div>
                Recept post1
                <div>Resept post img</div>
                <div className="title-color">Resept post title</div>
                <div>Resept post content</div>
                <div>
                    like and reed more btns
                    <Button variant="outlined">Default</Button>
                </div>
            </div>
        </div>
    )
}
export default ArticlesItem
