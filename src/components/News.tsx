import React, { useState } from 'react'
import ImageSlider from './commons/ImageSlider'

const NEWS = [
    'NEWS 1',
    'NEWS 2',
    'NEWS 3'
]

const imageURLS = [
    '/images/sale1.jpg',
    '/images/sale2.jpg'
]

export default function News({...props}) {
    const [currentNews, setCurrentNews] = useState(NEWS[0])

    return (
        <section id='section-news' {...props}>
            <ImageSlider className='news-image-slider' imageURLS={imageURLS} />
            <div id='promo-1'>PROMO 1</div>
            <div id='promo-2'>PROMO 2</div>
            <div id='promo-links'>
                <a href='#'>
                    <img src='https://cf.shopee.co.id/file/d7385c2d6fb6d57c647a09fad1114e14_xhdpi' />
                    Shopee Pilih Lokal
                </a>
                <a href='#'>
                    <img src='https://cf.shopee.co.id/file/fe02a504f64b146f90af16947ae65d08_xhdpi' />
                    Elektronik 100% ori
                </a>
                <a href='#'>
                    <img src='https://cf.shopee.co.id/file/5164f9b1e9319def7e609101eb3c9349_xhdpi' />
                    inFashion
                </a>
                <a href='#'>
                    <img src='https://cf.shopee.co.id/file/4447bdcba3c51c693feef4f22ba05c49_xhdpi' />
                    Shopee Supermarket
                </a>
                <a href='#'>
                    <img src='https://cf.shopee.co.id/file/4e08bce7d8d6ab488b82ab59d03cb793_xhdpi' />
                    Murah Lebay
                </a>
                <a href='#'>
                    <img src='https://cf.shopee.co.id/file/60434906cac999e73fdcc78c8f484467_xhdpi' />
                    Semua Promo
                </a>
            </div>
        </section>
    )
}