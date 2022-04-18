import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap'
const Hero = () => {
  return (
 <div>
<Carousel fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="images/EyeMakeup.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>First slide label</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <button className='book-btn'>Book Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="images/hair-salon.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Second slide label</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className='book-btn'>Book Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="images/salon-thread-waxing-services.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Third slide label</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <button className='book-btn'>Book Now</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Hero