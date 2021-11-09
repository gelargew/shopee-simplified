import React from 'react'
import '../styles/global.css'
import '../styles/Layout.css'

import Logo from '../svgs/Logo.svg'
import ShoppingCart from '../svgs/ShoppingCart.svg'
import Chat from './Chat'


export default function Layout({...props}) {
    return (
        <>
            <header>
                <div className='header-container'>
                    <Chat />
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
            <footer>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius 
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
                    nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </footer>
            
        </>
    )
}