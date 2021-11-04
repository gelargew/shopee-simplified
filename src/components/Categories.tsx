import React, { useRef } from 'react'

const CATEGORIES = [
    {
        name: 'Elektronik',
        imgURL: 'https://cf.shopee.co.id/file/02577b74fe168f6dabd57eab9c2f8f21_tn'
    },
    {
        name: 'Makanan & Minuman',
        imgURL: 'https://cf.shopee.co.id/file/b912e9726dc8cb5e9447a7738a68479c_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    },
    {
        name: 'Komputer & aksesoris',
        imgURL: 'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn'
    }
]


export default function Categories() {
    const categoriesRef = useRef<HTMLDivElement>()
    
    const scrollRight = () => {
        categoriesRef.current.scrollBy({
            left: 500,
            behavior: 'smooth'
        })
    }

    const scrollLeft = () => {
        categoriesRef.current.scrollBy({
            left: -500,
            behavior: 'smooth'
        })
    }

    return (
        <section id='section-categories'>
            <h3>KATEGORI</h3>
            <div id='category-list' ref={categoriesRef}>
                {CATEGORIES.map(category => 
                    <a key={category.name} href='#'>
                        <img src={category.imgURL} />
                        {category.name}
                    </a>)}
            </div>
            <button className='btn-left' onClick={scrollLeft}>
                &lt;
            </button>
            <button className='btn-right' onClick={scrollRight} >
                &gt;
            </button>
        </section>
    )
}