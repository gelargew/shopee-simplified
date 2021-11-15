import React, { FormEvent, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import ArrowEnter from '../svgs/ArrowEnter.svg'
import ArrowBack from '../svgs/ArrowBack.svg'
import '../styles/mobileChat.css'


export default function MobileChat() {
    const [chats, setChats] = useState<string[]>([])
    const inputRef = useRef<HTMLTextAreaElement>()

    const submitChat = (e:FormEvent) => {
        e.preventDefault()
        if (inputRef.current.value) {
            setChats([...chats, inputRef.current.value])
            inputRef.current.value = ''
            inputRef.current.blur()
        }
    }

    return (
        <>
            <main id='mobile-main'>
                <Helmet>
                    <title>not Shopee</title>
                    <link rel="icon" type="image/png" href="/ShoppingCart.png"></link>
                    <link rel="alternate icon" type="image/png" href="/images/icon.png"></link>
                </Helmet>
                <h4 id='chat-title' >Chat</h4>
                <div id='chat-body'>
                    {chats.map((chat, idx) => <p className='chat-text' key={idx}>{chat}</p>)}
                </div>
                <form id='chat-form' onSubmit={submitChat}>
                    <textarea ref={inputRef} className='chat-input' placeholder='Tulis pesan' />
                    <button><ArrowEnter /></button>
                </form>
            </main>
            <Link to='/' className='back-button'><ArrowBack /></Link>
        </>
    )
}