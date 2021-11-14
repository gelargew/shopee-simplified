import React, { FormEvent, useRef, useState } from 'react'
import HeaderMobile from '../components/HeaderMobile'
import '../styles/mobileChat.css'


export default function MobileChat() {
    const [chats, setChats] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>()

    const submitChat = (e:FormEvent) => {
        e.preventDefault()
        setChats([...chats, inputRef.current.value])
        console.log(inputRef.current.value)
        inputRef.current.value = ''
        inputRef.current.blur()
    }

    return (
        <>
            <main id='mobile-main'>
                <h4 id='chat-title' >Chat</h4>
                <div id='chat-body'>
                    {chats.map((chat, idx) => <p className='chat-text' key={idx}>{chat}</p>)}
                </div>
                <form id='chat-form' onSubmit={submitChat}>
                    <input ref={inputRef} className='chat-input' placeholder='Tulis pesan' />
                    <button>chat</button>
                </form>
            </main>
        </>
    )
}