import React, { useState } from 'react'
import IconNav from '../svgs/NavigationIcon.svg'
import IconClose from '../svgs/closeIcon.svg'
import Chat from './Chat'
import { Link } from 'gatsby'

export default function HeaderMobile() {
    const [showNavigation, setShowNavigation] = useState(false)

    return (
        <header id='header-mobile'>
            <input id='search-bar' placeholder='search' />
            <button className='nav-toggle' onClick={() => setShowNavigation(!showNavigation)} >
                {showNavigation ? <IconClose /> : <IconNav />}
            </button>
            {showNavigation && <NavigationMobile />}
        </header>
    )
}


const NavigationMobile = () => {

    return (
        <div id='nav-mobile'>
            <Link to='/'>HOME</Link>
            <a href='#'>AKUN</a>
            <a href='#'>TRANSAKSI</a>
            <Link to='/MobileChat'>CHAT</Link>
        </div>
    )
}