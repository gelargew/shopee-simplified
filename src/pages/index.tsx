import React from 'react'
import Layout from '../components/Layout'
import News from '../components/News'
import '../styles/index.css'


export default function Index() {
  return (
    <Layout>
      <main>
        <News />
      </main>
    </Layout>
  )
}