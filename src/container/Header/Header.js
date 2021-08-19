import React from 'react'
import Menu from '../../components/Menu/Menu'

const Header = () => {
    return (
        <>
            <div>
                App bar
                <div>
                    Container maxWidth=lg
                    <div>Logo</div>
                    <Menu />
                </div>
            </div>
        </>
    )
}
export default Header
