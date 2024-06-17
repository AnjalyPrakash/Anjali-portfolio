import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Image from '../Images/Anjaly_Prakash.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home-bg'>
            <div className='container mb-5 mt-5 '>
                <Row className='d-flex justify-content-center align-items-center w-100 mb-5 mt-5'>
                    <Col md={4} className='mt-5'>
                        <img src={Image} alt="no image" style={{ height: '400px', width: '100%', borderRadius: '50%' }} />
                    </Col>
                    <Col md={6} className='ms-3 mt-5'>
                        <div className='d-flex'>
                            <div className='horizontal-line'></div>
                            <h1 className='ms-2' style={{ fontWeight: '800' }}>I'M ANJALY PRAKASH</h1>
                        </div>
                        <h2 className='fw-bold text-warning ms-5 mt-3' style={{ fontWeight: '900' }}>WEB DEVELOPER</h2>
                        <p className='ms-5 mt-4'>I'm Anjaly Prakash, a BCA graduate from SS College, Poothotta, with specialized MERN stack training from Luminar Technolab. Proficient in HTML, CSS, Bootstrap, JavaScript, React, Node, Express, and MongoDB, I led the development of an Event Management system, showcasing my ability to create robust, user-friendly applications. Currently, I'm expanding my skills through a WordPress Internship at PotterWheel Media.

                        </p>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-2  d-flex justify-content-center align-items-center">
                                <Link to={'/'} className='nav text-decoration-none text-success'><p>HOME</p></Link>
                            </div>
                            <div className="col-md-2  d-flex justify-content-center align-items-center">
                                <Link to={'/about'} className='nav text-decoration-none text-danger'><p>ABOUT</p></Link>
                            </div>
                            <div className="col-md-2  d-flex justify-content-center align-items-center">
                                <Link to={'/services'} className='nav text-decoration-none text-danger'><p>SERVICES</p></Link>
                            </div>
                            <div className="col-md-2  d-flex justify-content-center align-items-center">
                                <Link to={'/portfolio'} className='nav text-decoration-none text-danger'><p>PORTFOLIO</p></Link>
                            </div>
                            <div className="col-md-2  d-flex justify-content-center align-items-center">
                                <Link to={'/contact'} className='nav text-decoration-none text-danger'><p >CONTACT</p></Link>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <button className=' d-flex justify-content-center align-items-center btn ms-5 btn-outline-warning mb-5'>Download CV</button>
                    </Col>
                    <Col md={2} className='mb-5'>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home