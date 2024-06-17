import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Travel from '../Images/Travel Website.png'

function TravelWeb() {
    return (
        <>
            <Container>
                <div className='mt-5 mb-5'>
                    <h2 className='text-center text-danger mt-4 mb-5'>TRAVEL WEBSITE</h2>
                    <Row>
                        <Col md={4}>
                            <img src={Travel} style={{ height: '300px', width: '100%' }} alt="no image" />
                            <div className='text-center mt-4'>
                                <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/TRAVELWEBSITE'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                                <a className='links text-decoration-none text-dark' href='https://travel-website-opal-pi.vercel.app'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <p className='ms-4 mb-4'>Designed a <span className='text-danger'>Responsive</span> travel website for my portfolio, focusing on creating a modern and user-friendly interface. This project emphasizes intuitive layouts for exploring travel destinations and booking options, ensuring a seamless experience across devices. It showcases my proficiency in creating visually appealing and functional UI/UX designs tailored for travel enthusiasts.</p>
                        </Col>
                        <Col md={4} className='mt-3 mb-5'>
                            <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default TravelWeb