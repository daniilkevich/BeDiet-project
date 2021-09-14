import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu-wrapper col-dt-9">
            <nav>
                <ul className="menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="/#">Diets</a>
                    </li>
                    <li>
                        <Link to="/breakfast">Breakfast</Link>
                    </li>
                    <li>
                        <Link to="/lunch">Lunch</Link>
                    </li>
                    <li>
                        <Link to="/dinner">Dinner</Link>
                    </li>
                    <li>
                        <a href="/#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu
