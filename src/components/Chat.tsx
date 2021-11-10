import React, { useState } from 'react'

const CHAT_CONTACTS = [
    {
        name: 'offline chat'
    }
]

export default function Chat() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={isActive ? 'chat-container active' : 'chat-container'}>
            <div className='chat-toggle' onClick={() => setIsActive(!isActive)} >
                Chat
            </div>
            {isActive &&   
            <>         
                <div className='chat-box'>
                    
                </div>
                <textarea className='chat-input' placeholder='Tulis pesan' disabled />
                <div className='chat-contacts'>
                    {CHAT_CONTACTS.map(contact => 
                    <div className='chat-contact' key={contact.name}>
                        {contact.name}    
                    </div>)}
                </div>
            </>}
        </div>
    )
}