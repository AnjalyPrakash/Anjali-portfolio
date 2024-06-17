import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Weather from '../Images/Weather App.png'


function WeatherApp() {
    return (
        <>
            <Container>
                <div className='mt-5 mb-5'>
                    <h2 className='text-center text-danger mt-5 mb-5'>WEATHER APP</h2>
                    <Row className='mt-5'>
                        <Col md={4}>
                            <img src={Weather} style={{ height: '300px', width: '100%' }} alt="no image" />
                            <div className='text-center mt-4'>
                                <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/WEATHER-APP'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                                <a className='links text-decoration-none text-dark' href='https://magnificent-torte-f50b45.netlify.app'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <p className='ms-4 mb-4'>Developed a dynamic weather application that allows users to search for and view the current weather conditions of any city. By utilizing the <span className='text-danger'>Fetch API</span>, the app retrieves real-time data from a reliable weather service, ensuring that users receive accurate and up-to-date information. The user-friendly interface prompts users to enter the name of a city, and upon submission, displays comprehensive climate details including temperature, humidity, wind speed, and atmospheric conditions. This project highlights my proficiency in making API calls, handling asynchronous data, and creating intuitive, responsive user interfaces.</p>
                        </Col>
                        <Col md={4} className='mt-2'>
                            <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP,JAVSCRIPT</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default WeatherApp