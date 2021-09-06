import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu-wrapper col-dt-9">
            <nav>
                <ul className="menu">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="">Diets</a>
                    </li>
                    <li>
                        <a href="">Breakfast</a>
                    </li>
                    <li>
                        <a href="">Lunch</a>
                    </li>
                    <li>
                        <a href="">Dinner</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu
