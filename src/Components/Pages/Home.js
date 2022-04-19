import React from 'react'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import { Services } from '../Services/Services'
import Offer from '../Offer/Offer'
export const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <Offer />
        <Footer/>
    </div>
  )
}
