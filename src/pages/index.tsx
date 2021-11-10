import React from 'react'
import Categories from '../components/Categories'
import ImageSlider from '../components/commons/ImageSlider'
import Layout from '../components/Layout'
import Mall from '../components/Mall'
import News from '../components/News'
import Recomendations from '../components/Recomendations'
import '../styles/index.css'


export default function Index() {
  return (
    <Layout>
      <main onScroll={()=> console.log('main')} >
        <News />
        <Categories />
        <Mall />
        <Recomendations />
      </main>
    </Layout>
  )
}