import React from 'react'
import Hero from '../../components/hero'
import About from '../../components/about'
import OurMenu from '../../components/ourMenu'
import { Helmet } from 'react-helmet-async'
import OurSatisfed from '../../components/OurSatisfed'
import RecentBlog from '../../components/RecentBlog'

const Home = () => {
  return (
   <>
   <Helmet>
    <title>Home</title>
   </Helmet>
   <main>
        <Hero/>
        <About/>
        <OurMenu/>
        <OurSatisfed/>
        <RecentBlog/>
   </main>
   </>
  )
}

export default Home