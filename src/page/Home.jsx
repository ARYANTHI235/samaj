import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import Facilities from '../components/Facilities'
import Team from '../components/Team'
import Events from '../components/Events'

const Home = () => {
  return (
    <>
       <div>
         <Banner />
          <AboutUs />
          <Facilities />
          <Team />
          <Events />
       </div>
    </>
  )
}

export default Home