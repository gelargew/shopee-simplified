import React from 'react'

const PRODUCT =  {
        id: 43312,
        name: 'hallowen props',
        imageURL: '/images/sale1.jpg',
        price: 99999.99,
        sold_count: 1000,
        seller: {
            status: 'Star',
            name: 'Admin'
        }
    }


const ARR = new Array(40).fill(0)

export default function Recomendations() {

    return (
        <section id='section-recomendations'>
            <h4>REKOMENDASI</h4>
            <div className='products'>
                {ARR.map((num, idx) => 
                    <div key={idx} className='product'>
                        {PRODUCT.seller.status && 
                        <>
                            <div className='seller-status'>
                                {PRODUCT.seller.status}
                            </div>
                            <div></div>
                        </>}
                        <img src={PRODUCT.imageURL}/>
                        <p>{PRODUCT.name}</p>
                        <small className='price'>{PRODUCT.price}</small>
                        <div className='product-accent'>Product Serupa</div>
                    </div>)}
            </div>
        </section>
    )
}