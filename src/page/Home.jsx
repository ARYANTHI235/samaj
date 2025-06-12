import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import Facilities from '../components/Facilities'
import Team from '../components/Team'

const Home = () => {
  return (
    <>
       <div>
         <Banner />
          <AboutUs />
          <Facilities />
          <Team />
       </div>
    </>
  )
}

export default Home