import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
      <div className='d-flex justify-content-end'>
        <Button onClick={handleShow} className='btn btn-dark me-3 mt-3' style={{width:'60px',height:'40px'}}>
        <i class="fa-solid fa-bars-staggered"></i>
        </Button>
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            I will not close if you click outside of me.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  )
}

export default Header