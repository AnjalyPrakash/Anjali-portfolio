import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Event from '../Images/Event Management.png'
import VideoPlayer from '../Images/Video Player.png'
import Weather from '../Images/Weather App.png'
import Counter from '../Images/Counter App.png'
import Ecart from '../Images/E-Cart.png'
import Netflix from '../Images/Netflix.png'
import Byjus from '../Images/BYjus Clone.png'
import Travel from '../Images/Travel Website.png'
import Resto from '../Images/Restaurant.png'
import { Link } from 'react-router-dom'

function PortFolio() {
    return (
        <>
            <Container>
                <div className='mt-4 mb-5'>
                    <h2 className='text-center' style={{ fontWeight: '900' }}>MY <span className='text-warning'>PORTFOLIO</span></h2>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='horizontal-line2 bg-dark mb-2 ms-5'></div>
                        <h5 className='text-danger ms-1'>MY WORK</h5>
                    </div>
                    <Row>
                        <Col md={4} className='mt-3'>
                            <Link to={'/media-player'}>
                                <div className="portfolio-image-container">
                                    <img className="portfolio-image" src={VideoPlayer} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">Video Player</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4} className='mt-3'>
                            <Link to={'/weather-app'}>
                                <div className="portfolio-image-container">
                                    <img className="portfolio-image" src={Weather} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">Weather App</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4} className='mt-3'>
                            <Link to={'/event-management'}>
                                <div className="portfolio-image-container">
                                    <img className="portfolio-image" src={Event} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">Event Management</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className='mt-3'>
                            <Link to={'/counter-app'}>
                                <div className="portfolio-image-container">
                                    <img className="portfolio-image" src={Counter} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">Counter App</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4} className='mt-3'>
                            <Link to={'/e-cart'}>
                                <div className="portfolio-image-container">
                                    <img className="portfolio-image" src={Ecart} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">E-Cart</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4} className='mt-3'>
                            <Link to={'/netflix'}>
                                <div className="portfolio-image-container">
                                    <img className="portfolio-image" src={Netflix} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">Netflix Clone</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className='mt-3 mb-4'>
                            <Link to={'/byjus'}>
                                <div className="portfolio-image-container">
                                    <img className="portfolio-image" src={Byjus} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">Byjus Learning App Clone</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4} className='mt-3 mb-4'>
                            <Link to={'/travel'}>
                                <div className="portfolio-image-container">
                                    <img className="portfolio-image" src={Travel} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">Travel Website</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4} className='mt-3 mb-5'>
                            <Link to={'/restaurant-web'}>
                                <div className="portfolio-image-container mb-5">
                                    <img className="portfolio-image" src={Resto} alt="Event" />
                                    <div className="overlay">
                                        <div className="overlay-text">Restaurant Website</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default PortFolio