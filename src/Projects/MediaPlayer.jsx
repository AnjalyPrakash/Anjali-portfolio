import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VideoPlayer from '../Images/Video Player.png'


function MediaPlayer() {
    return (
        <>
            <Container>
                <div className='mt-5 mb-5'>
                    <h2 className='text-center text-danger mt-4 mb-5'>MEDIA PLAYER</h2>
                    <Row>
                        <Col md={4}>
                            <img src={VideoPlayer} style={{ height: '300px', width: '100%' }} alt="no image" />
                            <div className='text-center mt-4'>
                                <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/MEDIA_PLAYER_frontend'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                                <a className='links text-decoration-none text-dark' href='https://media-player-frontend-six.vercel.app'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <p className='ms-4 mb-4'>Designed and developed a media player website that enables users to create and manage video playlists seamlessly. Users can add YouTube videos to their personalized playlists and perform full <span className='text-danger'>CRUD</span> (Create, Read, Update, Delete) operations on their video entries, providing a highly interactive and customizable experience. The website leverages a <span className='text-danger'>JSON server</span> as the backend, ensuring efficient data storage and retrieval. The intuitive interface allows users to easily search for videos, add them to their playlists, edit video details, remove unwanted entries, and play videos directly within the application. This project demonstrates my skills in building robust web applications, integrating external APIs, and managing backend services.</p>
                        </Col>
                        <Col md={4} className='mt-3 mb-5'>
                            <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP,REACT JS</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default MediaPlayer