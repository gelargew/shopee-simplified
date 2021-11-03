import React from 'react'
import '../styles/global.css'
import '../styles/Layout.css'

import Logo from '../svgs/Logo.svg'
import ShoppingCart from '../svgs/ShoppingCart.svg'


export default function Layout({...props}) {
    return (
        <>
            <header>
                <div className='header-container'>
                    <div id='header-contact'>
                        <a href='#'>Seller Center</a>|
                        <a href='#'>Download</a>|
                        <span>
                            Ikuti kami di 
                        </span>
                        <a href='#'>f</a>
                        <a href='#'>i</a>
                    </div>
                    
                    <div id='header-user-profile'>
                        <a href='#'>Notifikasi</a>
                        <a href='#'>Bantuan</a>
                        <a href="#">Daftar</a>|
                        <a href='#'>Login</a>
                    </div>

                    <a href='#' id='header-logo'>
                        <Logo />
                    </a>

                    <input id='search-bar' placeholder='search' />

                    <div id='header-latest-search'>
                        <a href='#'>Wacom One</a>
                        <a href='#'>RTX 3090</a>
                        <a href='#'>M1</a>
                    </div>
                    
                    <a href='#' id='header-cart'>
                        <ShoppingCart />
                    </a>
                </div>
            </header>
            {props.children}
        </>
    )
}