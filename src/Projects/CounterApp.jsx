import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Counter from '../Images/Counter App.png'


function CounterApp() {
    return (
        <>
            <Container>
                <div className='mt-5 mb-5'>
                    <h2 className='text-center text-danger mt-4 mb-5'>COUNTER APP</h2>
                    <Row>
                        <Col md={4}>
                            <img src={Counter} style={{ height: '300px', width: '100%' }} alt="no image" />
                            <div className='text-center mt-4'>
                                <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/COUNTER_APP'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                                <a className='links text-decoration-none text-dark' href='https://counter-app-ebon-gamma.vercel.app'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <p className='ms-4 mb-4'>Developed a robust counter application that demonstrates my expertise in state management using <span className='text-danger'>Redux</span>. The application allows users to set an initial number and then increment or decrement the value as needed. This functionality is seamlessly managed through Redux, ensuring consistent and predictable state changes. The intuitive interface makes it easy for users to interact with the counter, providing immediate visual feedback for each increment and decrement action. This project showcases my skills in integrating Redux into a React application, efficiently managing state, and creating a smooth user experience.</p>
                        </Col>
                        <Col md={4} className='mt-2 mb-5'>
                            <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP,REACT JS</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default CounterApp