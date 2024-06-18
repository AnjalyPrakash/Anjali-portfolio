import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Resto from '../Images/Restaurant.png'

function Restaurant() {
    return (
        <Container>
            <div className='mt-5 mb-5'>
                <h2 className='text-center text-danger mt-4 mb-5'>RESTAURANT WEBSITE</h2>
                <Row>
                    <Col md={4}>
                        <img src={Resto} style={{ height: '300px', width: '100%' }} alt="no image" />
                        <div className='text-center mt-4'>
                            <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/RESTAURANT'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                            <a className='links text-decoration-none text-dark' href='https://anjalyprakash.github.io/RESTAURANT'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <p className='ms-4 mb-4'>I've designed a stylish restaurant website for my portfolio, focusing on a user-friendly interface that highlights the menu, ambiance, and special offers. This project showcases my ability to create attractive and functional UI/UX designs tailored for restaurant businesses.
                        </p>
                    </Col>
                    <Col md={4} className='mt-2 mb-5'>
                        <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP,REACT JS</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Restaurant