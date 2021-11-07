import React from 'react'

const PRODUCTS = [
    {
        id: 43312,
        name: 'hallowen props',
        imageURL: '/images/sale1.jpg',
        price: 99999.99,
        sold_count: 1000,
        seller: {
            status: 'star',
            name: 'Admin'
        }
    }
]

export default function Recomendations() {

    return (
        <section id='section-recomendations'>
            <h4>REKOMENDASI</h4>
            <div className='products'>
                {PRODUCTS.map(PRODUCT => 
                    <div key={PRODUCT.id} className='product'>
                        {PRODUCT.seller.status && <div className='seller-status'>{PRODUCT.seller.status}</div>}
                        <img src={PRODUCT.imageURL}/>
                        <p>{PRODUCT.name}</p>
                        <p className='price'>{PRODUCT.price}</p><small>{PRODUCT.price}</small>
                    </div>)}
            </div>
        </section>
    )
}