import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Card } from 'react-bootstrap'
export const Services = () => {
  return (
    <div>
      <Container className='service'>
        <h2 className='text-center'> our <span>services</span></h2>
        <Row>
          <Col>
          <Card>
          <Card.Img src='images/Bridal.jpg' />
          <div className="card-img-overlay text-white">
              <h5 className="card-title">Card Title Here</h5>
            </div>
            <Card.Body>
              <Link to='/'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
          <Card.Img src='images/Bridal.jpg' />
          <div className="card-img-overlay text-white">
              <h5 className="card-title">Card Title Here</h5>
            </div>
            <Card.Body>
            <Link to='/'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
          <Card.Img src='images/Bridal.jpg' />
          <div className="card-img-overlay text-white">
              <h5 className="card-title">Card Title Here</h5>
            </div>
            <Card.Body>
            <Link to='/'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
          <Card.Img src='images/Bridal.jpg' />
          <div className="card-img-overlay text-white">
              <h5 className="card-title">Card Title Here</h5>
            </div>
            <Card.Body>
            <Link to='/'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
          <Card.Img src='images/Bridal.jpg' />
          <div className="card-img-overlay text-white">
              <h5 className="card-title">Card Title Here</h5>
            </div>
            <Card.Body>
            <Link to='/'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img src='images/Bridal.jpg' />
            <div className="card-img-overlay text-white">
              <h5 className="card-title">Card Title Here</h5>
            </div>
            <Card.Body>
              <Link to='/'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>  
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
