import React from 'react';
import {
    Row,
    Container,
    Col as Column,
    Nav,
} from 'react-bootstrap';


const Bawah = () => {
    return (
        
                <div className='text-center'>
                    
                    <br></br>
                    <Row md={4} className="movieWrapper" id="bawah">
                        <Container>
                        <Column className='text-center'>
                            <h1 className='text-white'>SOSIAL MEDIA</h1>
                            <Nav.Link href="#">Facebook</Nav.Link>
                            <Nav.Link href="#">Instagram</Nav.Link>
                            <Nav.Link href="#">Twitter</Nav.Link>
                            <br></br>
                        </Column>
                        <Row md={5} className="movieWrapper" id="bawah"></Row>
                        <Column className='text-center'>
                            <h1 className='text-white'>EMAIL</h1>
                            <Nav.Link href="#">tulangbawang99@gmail.com</Nav.Link>
                            <br></br>
                        </Column>
                        <Row md={6} className="movieWrapper" id="bawah"></Row>
                        <Column className='text-center'>
                            <h1 className='text-white'>CONTACT US</h1>
                            <Nav.Link href="#">081919862740</Nav.Link>
                            <Nav.Link href="#">081919862740</Nav.Link>
                            <br></br>
                        </Column>
                        </Container>
                    </Row>
                    <div className='text-white'><br></br><h3>@_DINAS PERIKANAN TULANG BAWANG_@</h3></div>
                </div>
            
    );
  };
  export default Bawah;