import React from 'react'
import ByjusLearning from '../Images/BYjus Clone.png'
import { Container, Row, Col } from 'react-bootstrap'


function Byjus() {
    return (
        <Container>
            <div className='mt-5 mb-5'>
                <h2 className='text-center text-danger mt-4 mb-5'>BYJU'S LEARNING APP CLONE</h2>
                <Row>
                    <Col md={4}>
                        <img src={ByjusLearning} style={{ height: '300px', width: '100%' }} alt="no image" />
                        <div className='text-center mt-4'>
                            <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/BYJU-S-LEARNING-CLONE'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                            <a className='links text-decoration-none text-dark' href='https://euphonious-pudding-40062a.netlify.app'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <p className='ms-4 mb-4'>meticulously crafted a layout inspired by the design principles of the Byju's learning app. This project showcases my proficiency in UI/UX design using React, focusing on creating a visually engaging and user-friendly interface. The design features a structured layout with clear sections for educational content, interactive modules, videos, and quizzes, aiming to replicate the intuitive navigation and educational focus of Byju's. Each screen is carefully designed to optimize usability and visual appeal, ensuring a seamless experience for users exploring educational materials. This project underscores my skills in crafting effective UI designs that prioritize both functionality and aesthetic coherence.</p>
                    </Col>
                    <Col md={4} className='mb-5'>
                        <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP,REACT JS</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Byjus