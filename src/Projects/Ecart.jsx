import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ECart from '../Images/E-Cart.png'

function Ecart() {
    return (
        <Container>
            <div className='mt-5 mb-5'>
                <h2 className='text-center text-danger mt-4 mb-5'>E-CART</h2>
                <Row>
                    <Col md={4}>
                        <img src={ECart} style={{ height: '300px', width: '100%' }} alt="no image" />
                        <div className='text-center mt-4'>
                            <a className='links me-3 text-decoration-none text-dark' href='https://github.com/AnjalyPrakash/E-CART'><i class="fa-brands fa-github fa-2x"></i>Git Link</a>
                            <a className='links text-decoration-none text-dark' href='https://e-cart-jet.vercel.app/'><i class="fa-solid fa-up-right-from-square fa-2x"></i>Preview</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <p className='ms-4 mb-4'>Developed a sophisticated e-cart application that highlights my ability to create comprehensive e-commerce solutions. This application features a dynamic wishlist and cart system where users can add products to their wishlist or directly to their cart, and proceed to purchase those products. Leveraging Redux for state management ensures that the user's selections and the overall cart state are consistently and efficiently managed. Additionally, the application utilizes <span className='text-danger'>Axios</span> to fetch product data from an external API, providing a seamless and responsive user experience. This project showcases my skills in combining <span className='text-danger'>Redux</span> with React, making API calls with Axios, and building feature-rich, user-friendly interfaces.</p>
                    </Col>
                    <Col md={4} className='mt-5 mb-5'>
                        <p className='mb-5'><span className='text-warning'><i class="fa-solid fa-code"></i> Technologies Used</span> : HTML,CSS,BOOTSTRAP,REACT JS</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Ecart