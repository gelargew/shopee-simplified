import React from 'react'
import ImageSlider from './commons/ImageSlider'
import Watermark from './commons/Watermark'


const imgURLS = [
    '/images/sale1.jpg',
    '/images/sale2.jpg',
    '/images/sale3.jpg'
]

export default function Mall() {

    return (
        <section id='section-mall'>
            <h3>SHOPEE MALL</h3>
            <span>
                7 Hr Pengembalian
                100% Ori
                Gratis Ongkir
            </span>
            <ImageSlider imageURLS={imgURLS} />
            <div id='mall-products'>
                <h2>MALL PRODUCTS</h2>
                <Watermark>SAMPLE</Watermark>
            </div>
        </section>
    )
}