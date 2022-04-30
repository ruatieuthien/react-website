import React from 'react'
import DestinationsHome from '../HomeSection/Destina/DestinationsHome'
import Download from '../HomeSection/Download/Download'
import Gallery from '../HomeSection/gallery/Gallery'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import MostPopular from '../HomeSection/popular/MostPopular'
import Works from '../HomeSection/Works/Works'


const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationsHome/>
      <Download />
      <Works />
      <Gallery />

    </>
  )
}

export default Home