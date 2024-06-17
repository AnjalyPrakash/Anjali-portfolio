import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FrontEND from '../Images/frontend-development.png'
import BackEND from '../Images/backend-development.png'
import WebDEV from '../Images/web_developement.png'

function Services() {
    return (
        <>
            <Container>
                <div className='d-flex justify-content-center align-items-center flex-column mb-5 mt-3'>
                    <h1 className='text-center text-dark' style={{ fontWeight: '900' }}>WHAT I DO</h1>
                    <div className='d-flex'>
                        <div className='horizontal-line2 bg-warning mt-2 ms-5'></div>
                        <h5 className='text-danger'>TAKE A LOOK</h5>
                    </div>
                </div>
                <Row className='mt-3'>
                    <Col md={4}>
                        <div className='mb-3 text-center'>
                            <img src={WebDEV} alt="no image" style={{ height: '100px', width: '150px' }} />
                            <h5 className='mt-2'>Web Development</h5>
                            <p className='text-center'>I offer comprehensive web development services, leveraging my expertise in the MERN stack (MongoDB, Express, React, Node) to create dynamic and efficient web applications. With a strong foundation in HTML, CSS, JavaScript, and Bootstrap, I design and develop websites that are not only visually appealing but also highly functional and responsive.

                            </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='mb-3 text-center'>
                            <img src={FrontEND} alt="no image" style={{ height: '100px', width: '100px' }} />
                            <h5 className='mt-2 '>Front End Development</h5>
                            <p className='text-center'>As a skilled frontend developer, I transform design concepts into interactive and user-friendly interfaces. Utilizing React, HTML, CSS, and JavaScript, I build responsive and intuitive user experiences. My attention to detail ensures that every aspect of the user interface is polished and performs well across different devices and browsers. Whether it's a simple landing page or a complex web application, I am dedicated to delivering exceptional frontend solutions that enhance user engagement.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='mb-3 text-center'>
                            <img src={BackEND} alt="no image" style={{ height: '100px', width: '100px' }} />
                            <h5 className='mt-2'>Back End Development</h5>
                            <p className='text-center'>Specializing in backend development, I ensure that your web applications run smoothly and efficiently. My proficiency in Node.js and Express allows me to build scalable and secure server-side applications. I focus on creating well-structured APIs and managing databases with MongoDB to provide seamless data integration and management. My experience includes developing user and admin interfaces, ensuring that all components of the backend are cohesive and reliable.</p>
                        </div>
                    </Col>
                </Row>

                {/* --------------------------------------------------------------------------- */}
            </Container>
            <div>
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no image" style={{ width: '100%', height: '400px', backgroundAttachment: 'fixed' }} />
            </div>
        </>
    )
}

export default Services