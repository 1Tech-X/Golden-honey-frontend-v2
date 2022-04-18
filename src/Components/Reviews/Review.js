import React from 'react'
import './Review.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card, Container } from 'react-bootstrap';

const Review = () => {
  return (
    <div>
        <Container fluid className='review'>
            <h2>REVIEWS</h2>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
   
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={true}
      
    >
      <SwiperSlide>
          <Card>
              <Card.Body>
                  <Card.Title><i className='fas fa-user' /> Full Name</Card.Title>
                  <br></br>
                    <div className='rating'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <br></br>
                    <Card.Text>hbjksbckbbkzckncdknjjndvsjnsdnvnndnkjsdnnjhhsckjk</Card.Text>
              </Card.Body>
          </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
              <Card.Body>
                  <Card.Title><i className='fas fa-user' /> Full Name</Card.Title>
                  <br></br>
                    <div className='rating'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <br></br>
                    <Card.Text>hbjksbckbbkzckncdknjjndvsjnsdnvnndnkjsdnnjhhsckjk</Card.Text>
              </Card.Body>
          </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
              <Card.Body>
                  <Card.Title><i className='fas fa-user' /> Full Name</Card.Title>
                  <br></br>
                    <div className='rating'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <br></br>
                    <Card.Text>hbjksbckbbkzckncdknjjndvsjnsdnvnndnkjsdnnjhhsckjk</Card.Text>
              </Card.Body>
          </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
              <Card.Body>
                  <Card.Title><i className='fas fa-user' /> Full Name</Card.Title>
                  <br></br>
                    <div className='rating'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <br></br>
                    <Card.Text>hbjksbckbbkzckncdknjjndvsjnsdnvnndnkjsdnnjhhsckjk</Card.Text>
              </Card.Body>
          </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
              <Card.Body>
                  <Card.Title><i className='fas fa-user' /> Full Name</Card.Title>
                  <br></br>
                    <div className='rating'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <br></br>
                    <Card.Text>hbjksbckbbkzckncdknjjndvsjnsdnvnndnkjsdnnjhhsckjk</Card.Text>
              </Card.Body>
          </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
              <Card.Body>
                  <Card.Title><i className='fas fa-user' /> Full Name</Card.Title>
                  <br></br>
                    <div className='rating'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <br></br>
                    <Card.Text>hbjksbckbbkzckncdknjjndvsjnsdnvnndnkjsdnnjhhsckjk</Card.Text>
              </Card.Body>
          </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
              <Card.Body>
                  <Card.Title><i className='fas fa-user' /> Full Name</Card.Title>
                  <br></br>
                    <div className='rating'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <br></br>
                    <Card.Text>hbjksbckbbkzckncdknjjndvsjnsdnvnndnkjsdnnjhhsckjk</Card.Text>
              </Card.Body>
          </Card>
      </SwiperSlide>

    </Swiper>
        </Container>
    </div>
  )
}

export default Review