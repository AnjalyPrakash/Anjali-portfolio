import React from 'react'
import NetFlix from '../Images/Netflix.png'
import { Container, Row, Col } from 'react-bootstrap'

function Netflix() {
    return (
        <Container>
            <div className='mt-5 mb-5'>
                <h2 className='text-center text-danger mt-4 mb-5'>NETFLIX</h2>
                <Row>
                    <Col md={4}>
                        <img src={NetFlix} style={{ height: '300px', width: '100%' }} alt="no image" />
                        <div className='text-center mt-4'>
                            <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/NETFLIX'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                            <a className='links text-decoration-none text-dark' href='https://deluxe-sherbet-8db392.netlify.app'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <p className='ms-4 mb-4'>Created a Netflix clone that demonstrates my capabilities in building feature-rich, visually appealing applications using React. This project leverages the <span className='text-danger'>TMDB</span> (The Movie Database) API to fetch and display a vast array of movie and TV show data, providing users with an experience similar to Netflix. The application features browsing through various categories, viewing detailed information about each title, and seamless navigation. By utilizing React's powerful component-based architecture, the app ensures smooth and efficient handling of user interactions and dynamic data display. This project showcases my skills in integrating third-party APIs, managing state and UI with React, and creating engaging, user-centric interfaces.</p>
                    </Col>
                    <Col md={4} className='mt-5 mb-5'>
                        <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP,REACT JS</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Netflix