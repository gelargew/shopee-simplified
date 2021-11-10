import React from 'react'
import '../../styles/commons.css'


export default function Watermark({className='', ...props}) {

    return (
        <div className={`watermark ${className}`} {...props}></div>
    )
}