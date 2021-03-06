import React from 'react'
import Menu from '../../components/Menu/Menu'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="header header-row">
                <div className="container">
                    <div className="row">
                        <div className="logo col-dt-3">
                            <a href="/#">
                                <img
                                    src="./imajes/logo-diet.png"
                                    alt="nice"
                                ></img>
                            </a>
                        </div>
                        <Menu />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header
