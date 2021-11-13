import React, { useState } from 'react'
import IconNav from '../svgs/NavigationIcon.svg'
import IconClose from '../svgs/closeIcon.svg'
import Chat from './Chat'

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
            <a href='#'>AKUN</a>
            <a href='#'>TRANSAKSI</a>
            <a href='#'>CHAT</a>
        </div>
    )
}