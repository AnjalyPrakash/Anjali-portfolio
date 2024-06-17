import React from 'react'

function Footer() {
    return (
        <div>
            <div className='bg-dark text-light fixed-bottom'>
                <div className='container d-flex'>
                    <p className='fw-bold pt-3'>Copyright © 2024 <span className='text-warning'>ANJALY PRAKASH</span> | Portfolio. All Rights Reserved</p>
                    <div className='ms-auto d-flex  p-2'>
                        <div className='square-background me-2'>
                            <a href='https://www.instagram.com/anju__z' className='text-decoration-none text-light'><i class="fa-brands fa-instagram fa-1x shadow"></i></a>
                        </div>
                        <div className='square-background me-2'>
                            <a href='www.linkedin.com/in/anjaly-prakash-35b6a8295' className='text-decoration -none text-light'><i class="fa-brands fa-linkedin-in fa-1x shadow"></i></a>
                        </div>
                        <div className='square-background me-2'>
                            <a href='https://github.com/AnjalyPrakash' className='text-decoration-none text-light'><i class="fa-brands fa-github fa-1x shadow"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer