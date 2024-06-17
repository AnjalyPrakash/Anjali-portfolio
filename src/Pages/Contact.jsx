import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactAPI } from '../Services/allAPI';

function Contact() {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleContact = async (e) => {
        e.preventDefault()
        const { name, email, subject, message } = contact
        if (!name || !email || !subject || !message) {
            toast.warning('Please Fill the Form Completely')
        }
        else {
            const result = await contactAPI(contact)
            console.log(result);
            if (result.status >= 200 || result.status < 300) {
                const result = await contactAPI(contact)
                console.log(result.data);
                toast.success('Message Sent')
            }
            else {
                toast.error('Something Went Wrong...Please Try Again Later!')
            }
        }

    }


    console.log(contact);

    return (
        <>
            <div className='container mb-5'>
                <h1 className='mt-5 text-center text-dark'>GET IN TOUCH</h1>
                <div className='d-flex justify-content-center align-items-center mb-5'>
                    <div className='horizontal-line2 bg-warning mt-2 ms-5'></div>
                    <h5 className='text-danger'>CONTACT</h5>
                </div>
            </div>
            <div className='container mb-5 mt-5'>
                <Row>
                    <Col md={6}>
                        <div className='d-flex mb-4'>
                            <i class="fa-solid fa-map fa-2x me-3 text-warning"></i>
                            <div className='flex-column'>
                                <h5 className='text-secondary ms-3'>LOCATION</h5>
                                <h6>Kakkanad, Ernakulam, Kerala</h6>
                            </div>
                        </div>
                        <div className='d-flex mb-4'>
                            <i class="fa-solid fa-envelope fa-2x me-3 text-warning"></i>
                            <div className='flex-column'>
                                <h5 className='text-secondary ms-3'>MAIL ME</h5>
                                <h6>anjalyprakaash@gmail.com</h6>
                            </div>
                        </div>
                        <div className='d-flex mb-5'>
                            <i class="fa-solid fa-square-phone fa-2x me-3 text-warning"></i>
                            <div className='flex-column'>
                                <h5 className='text-secondary ms-3'>CALL ME</h5>
                                <h6>anjalyprakaash@gmail.com</h6>
                            </div>
                        </div>
                        <div className="contact ms-5 mb-3">
                            <a href='https://www.instagram.com/anju__z' className='text-decoration-none text-dark me-4'><i class="fa-brands fa-square-instagram fa-2x"></i></a>
                            <a href='www.linkedin.com/in/anjaly-prakash-35b6a8295' className='text-decoration-none text-dark me-4'><i class="fa-brands fa-linkedin fa-2x"></i></a>
                            <a href='https://github.com/AnjalyPrakash' className='text-decoration-none text-dark me-4' ><i class="fa-brands fa-square-github fa-2x"></i></a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                            <input type="text" onChange={(e) => setContact({ ...contact, name: e.target.value })} placeholder='Your Name' className='form-control mb-3' />
                            <input type="email" onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder='Your Email' className='form-control mb-3' />
                            <input type="text" onChange={(e) => setContact({ ...contact, subject: e.target.value })} placeholder='Subject' className='form-control mb-3' />
                            <textarea placeholder='Message' onChange={(e) => setContact({ ...contact, message: e.target.value })} className='form-control mb-2'></textarea>
                            <button className='btn btn-success mb-5' onClick={handleContact}>SEND MESSAGE</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <ToastContainer position='top-center' autoClose={2000} theme='colored' />
        </>
    )
}

export default Contact