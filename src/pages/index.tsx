import React from 'react'
import Categories from '../components/Categories'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Mall from '../components/Mall'
import News from '../components/News'
import Recomendations from '../components/Recomendations'
import '../styles/index.css'


export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>not Shopee</title>
        <link rel="icon" type="image/png" href="/ShoppingCart.png"></link>
        <link rel="alternate icon" type="image/png" href="/images/icon.png"></link>
      </Helmet>
      <main onScroll={()=> console.log('main')} >
        <News />
        <Categories />
        <Mall />
        <Recomendations />
      </main>
    </Layout>
  )
}