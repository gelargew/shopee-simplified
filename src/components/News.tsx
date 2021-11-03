import React, { useState } from 'react'

const NEWS = [
    'NEWS 1',
    'NEWS 2',
    'NEWS 3'
]

export default function News({...props}) {
    const [currentNews, setCurrentNews] = useState(NEWS[0])

    return (
        <section id='section-news' {...props}>
            <div id='news-image-slider'>
                <div id='current-news'>{currentNews}</div>
            </div>
            <div id='promo-1'>PROMO 1</div>
            <div id='promo-2'>PROMO 2</div>
        </section>
    )
}