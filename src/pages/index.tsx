import React from 'react'
import Categories from '../components/Categories'
import ImageSlider from '../components/commons/ImageSlider'
import Layout from '../components/Layout'
import News from '../components/News'
import '../styles/index.css'


export default function Index() {
  return (
    <Layout>
      <main>
        <News />
        <Categories />
        <ImageSlider imageURLS={[
          'https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn',
          'https://cf.shopee.co.id/file/02577b74fe168f6dabd57eab9c2f8f21_tn',
          'https://cf.shopee.co.id/file/b912e9726dc8cb5e9447a7738a68479c_tn']} />
      </main>
    </Layout>
  )
}