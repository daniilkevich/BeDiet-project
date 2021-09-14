import React from 'react'
import { useState } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import './reset.css'

const App = () => {
    const [likeButtonsState, setLikeButtonsState] = useState({
        1: true,
        2: true,
    })
    const changeLike = (id) => {
        setLikeButtonsState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    return (
        <div>
            <Header />
            <Main changeLike={changeLike} likeButtonsState={likeButtonsState} />
            <Footer />
        </div>
    )
}
export default App
