import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Event from '../Images/Event Management.png'

function EventManagement() {
    return (
        <>
            <Container>
                <div className='mt-5 mb-5'>
                    <h2 className='text-center text-danger mt-4 mb-5'>EVENT MANAGEMENT</h2>
                    <Row>
                        <Col md={4}>
                            <img src={Event} style={{ height: '300px', width: '100%' }} alt="no image" />
                            <div className='text-center mt-4'>
                                <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/EVENT_MANAGEMENT_frontend'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                                <a className='links text-decoration-none text-dark' href='https://event-management-frontend-iota.vercel.app'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <p className='mt-5 ms-4 mb-4'>The Event Management System is a comprehensive web application designed to streamline the process of organizing and attending events. This project features two distinct interfaces: one for administrators and another for users, each offering tailored functionalities to meet their specific needs.
                            </p>
                            <p className='ms-4'>Administrators have full control over event management. They can create, view, update, and delete events. This ensures that the event listings are always up-to-date and accurate.</p>
                            <p className='ms-4'>Users can browse through a list of available events. Each event listing includes detailed information such as date, time, venue, and a brief description.</p>
                        </Col>
                        <Col md={4} className='mt-5 mb-5'>
                            <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP,REACT JS,NODE JS, MONGODB</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default EventManagement