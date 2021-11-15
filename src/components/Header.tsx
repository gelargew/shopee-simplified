import React from 'react'
import Logo from '../svgs/Logo.svg'
import ShoppingCartLogo from '../svgs/ShoppingCart.svg'
import Watermark from './commons/Watermark'

export default function Header() {

    return (
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
                    <Watermark>NOT</Watermark>
                    <Logo />
                </a>

                <input id='search-bar' placeholder='search' />

                <div id='header-latest-search'>
                    <a href='#'>Wacom One</a>
                    <a href='#'>RX 6800</a>
                    <a href='#'>M1</a>
                </div>
                
                <a href='#' id='header-cart'>
                    <ShoppingCartLogo />
                </a>
            </div>
        </header>
    )
}