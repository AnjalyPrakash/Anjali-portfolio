import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CircularProgress, Box, Typography } from '@mui/material';

const ProgressWithLabel = (props) => {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" style={{ width: '100px', height: '100px', borderRadius: '50%', color: 'orange' }} {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary" style={{fontSize:'20px',fontWeight:'900'}}>{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
};

function About() {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                <h1 className='mt-3' style={{ fontWeight: '900' }}>ABOUT<span className='text-warning'> ME</span></h1>
                <div className='d-flex'>
                    <div className='horizontal-line2 mt-1 me-1'></div><h6 className='fw-bold'>WHO AM I</h6>
                </div>
            </div>

            <Container>
                <h5 className='mt-4'>
                    I am Anjaly Prakash, a passionate MERN developer with a BCA degree from SS College, Poothotta, and specialized training in the MERN stack from Luminar Technolab. My enthusiasm for web development drives me to continuously enhance my skills and contribute to innovative projects. <br /><br />

                    Throughout my training, I have gained proficiency in a diverse range of technologies, including <span className='text-danger fw-bold'>HTML, CSS, Bootstrap, JavaScript, React, Node, Express,<span className='text-dark fw-normal'> and</span> MongoDB</span>. I have successfully applied these skills in various projects, showcasing my ability to design and implement effective web solutions. A highlight of my experience is leading the development of an Event Management system, complete with user and admin interfaces, which underscores my capability to deliver robust and user-friendly applications. <br /> <br />

                    Currently, I am further expanding my expertise through a WordPress Internship at PotterWheel Media, allowing me to delve deeper into web development and refine my skills. <br /> <br />

                    I am excited about the opportunity to bring my skills and passion to your team, contributing to meaningful projects and advancing my career in web development.
                </h5>
                <Row className='ms-5 mt-5 mb-5'>
                    <Col md={6}>
                        <h5><i className="fa-solid fa-angle-right text-success me-2 mt-4"></i>Name : Anjaly Prakash</h5>
                        <h5><i className="fa-solid fa-angle-right text-success me-2"></i>Age : 21 Years</h5>
                        <h5><i className="fa-solid fa-angle-right text-success me-2"></i>Birthday : 16 July 2002</h5>
                    </Col>
                    <Col md={6}>
                        <h5><i className="fa-solid fa-angle-right text-success me-2"></i>Phone Number : +91 7012664763</h5>
                        <h5><i className="fa-solid fa-angle-right text-success me-2"></i>City : Ernakulam, India</h5>
                        <h5><i className="fa-solid fa-angle-right text-success me-2"></i>Degree : Bachelor's</h5>
                        <h5><i className="fa-solid fa-angle-right text-success me-2"></i>Email : anjalyprakaash@gmail.com</h5>
                    </Col>
                </Row>

                {/* skills */}
                <div className=' flex-column mb-5 mt-5'>
                    <h2 className='mt-3 text-center mb-5'>MY <span className='text-danger'>SKILLS</span></h2>
                    <Row className='mt-5 mb-5'>
                        <Col md={3} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={80} />
                            <h5 className='mt-4'>HTML</h5>
                        </Col>
                        <Col md={3} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={63} />
                            <h5 className='mt-4'>CSS</h5>
                        </Col>
                        <Col md={3} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={83} />
                            <h5 className='mt-4'>BOOTSTRAP</h5>
                        </Col>
                        <Col md={3} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={60} />
                            <h5 className='mt-4'>JAVASCRIPT</h5>
                        </Col>
                    </Row>
                    <Row className='mt-5 mb-5'>
                        <Col md={3} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={88} />
                            <h5 className='mt-4'>REACT JS</h5>
                        </Col>
                        <Col md={3} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={67} />
                            <h5 className='mt-4'>NODE JS</h5>
                        </Col>
                        <Col md={3} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={67} />
                            <h5 className='mt-4'>EXPRESS JS</h5>
                        </Col>
                        <Col md={3} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={73} />
                            <h5 className='mt-4'>MONGO DB</h5>
                        </Col>
                    </Row>
                    <Row className='mt-5 mb-5'>
                        <Col md={4}>
                        </Col>
                        <Col md={4} className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                            <ProgressWithLabel value={50} />
                            <h5 className='mt-4'>WORDPRESS</h5>
                        </Col>
                        <Col md={4}>
                        </Col>
                    </Row>
                </div>

                {/* experience */}
                <div className='mb-5 mt-5'>
                    <h2 className='text-center mb-5 text-danger'>EXPERIENCE</h2>
                    <Row>
                        {/* <Col md={2} className='d-flex justify-content-center align-items-center flex-column'>
                            <i className="fa-solid fa-briefcase fa-2x text-warning text-center"></i>
                            <div className='vertical-line '></div>
                        </Col>
                        <Col md={10}>
                            <h5>2024 JULY - PRESENT</h5>
                            <h4><span className='text-danger'>Frontend Developer Intern</span> - SEATTLE NEW MEDIA</h4> */}
                            {/* <ul>
                                <li>Developed and launched multiple WordPress websites from scratch, ensuring responsive design and optimal user experience.</li>
                                <li>Created and customized WordPress plugins to enhance website functionality and meet specific client needs.</li>
                                <li>Regularly updated website content, including writing and publishing blog posts, optimizing them for SEO and user engagement.</li>
                            </ul> */}
                        {/* </Col> */}
                    </Row>
                    <Row>
                        <Col md={2} className='d-flex justify-content-center align-items-center flex-column'>
                            <i className="fa-solid fa-briefcase fa-2x text-warning text-center"></i>
                            <div className='vertical-line '></div>
                        </Col>
                        <Col md={10}>
                            <h5>2024 APRIL - 2024 JULY</h5>
                            <h4><span className='text-danger'>WordPress Developer Intern</span> - POTTERSWHEEL MEDIA</h4>
                            <ul>
                                <li>Developed and launched multiple WordPress websites from scratch, ensuring responsive design and optimal user experience.</li>
                                <li>Created and customized WordPress plugins to enhance website functionality and meet specific client needs.</li>
                                <li>Regularly updated website content, including writing and publishing blog posts, optimizing them for SEO and user engagement.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='mt-3 '>
                        <Col md={2} className='d-flex justify-content-center align-items-center flex-column'>
                            <i className="fa-solid fa-briefcase fa-2x text-warning text-center"></i>
                            <div className='vertical-line'></div>
                        </Col>
                        <Col md={10}>
                            <h5>2023 JULY - 2024 FEBRUARY</h5>
                            <h4><span className='text-danger'>MERN Stack Developer Intern</span> - LUMINAR TECHNOLAB</h4>
                            <ul>
                                <li>Gained a strong understanding of the React environment and successfully completed various projects using React.js.</li>
                                <li>Utilized RESTful APIs to fetch and display data dynamically, improving application interactivity and performance.</li>
                                <li>Managed version control using Git and GitHub, collaborating with team members to maintain code integrity and facilitate seamless development workflows.</li>
                                <li>Deployed projects on platforms such as Netlify, Vercel, and Render, ensuring smooth and efficient deployment processes.</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                {/* education */}
                <div className='mb-5 mt-5'>
                    <h2 className='text-center mb-5 text-danger'>EDUCATION</h2>
                    <Row className='mb-5'>
                        <Col md={2} className='d-flex justify-content-center align-items-center flex-column'>
                            <i className="fa-solid fa-circle text-warning fa-2x text-center"></i>
                            <div className='vertical-line2 '></div>
                        </Col>
                        <Col md={10}>
                            <h5>2020 - 2023</h5>
                            <h4>Bachelor of Computer Application</h4>
                            <h5>Swamy Saswathikananda College, Poothotta</h5>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={2} className='d-flex justify-content-center align-items-center flex-column'>
                            <i className="fa-solid fa-circle text-warning fa-2x text-center"></i>
                            <div className='vertical-line2'></div>
                        </Col>
                        <Col md={10}>
                            <h5>2018 - 2020</h5>
                            <h4>12 TH</h4>
                            <h5>Sree Rama Varma Higher Secondary School, Ernakulam</h5>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={2} className='d-flex justify-content-center align-items-center flex-column'>
                            <i className="fa-solid fa-circle text-warning fa-2x text-center"></i>
                            <div className='vertical-line2'></div>
                        </Col>
                        <Col md={10} className='mb-5'>
                            <h5>2017 - 2018</h5>
                            <h4>SSLC</h4>
                            <h5 className='mb-5'>ST.Teresa's Convent Girls Higher Secondary School, Ernakulam</h5>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default About;
