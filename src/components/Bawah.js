import React from 'react';
import {
    Row,
    Col as Column,
    Nav,
} from 'react-bootstrap';
import '../style/landingPage.css';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Bawah = () => {
    return (
        <Box className='Box'>
                <div id="bawah" className='footer-wide'>
                <br></br>
                <br></br>
                <div className='head-foot'>DINAS PERIKANAN KABUPATEN TULANG BAWANG</div>
                <br></br>
                <br></br>
                    <Row>
                        <Column className='List'>
                            <h1 className='Column'>SOSIAL MEDIA</h1>
                            <Nav.Link href="https://www.facebook.com/profile.php?id=100008302428718&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_transition=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true">Facebook</Nav.Link>
                            <Nav.Link href="https://www.instagram.com/richofajarpratama04/?hl=id">Instagram</Nav.Link>
                            <Nav.Link href="https://twitter.com/150Racing">Twitter</Nav.Link>
                            <br></br>
                        </Column>
                        <Column className='List'>
                            <h1 className='Column'>EMAIL</h1>
                            <Nav.Link href="https://mail.google.com/mail/u/0/#inbox">tulangbawang@gmail.com</Nav.Link>
                            <br></br>
                        </Column>
                        <Column className='List'>
                            <h1 className='Column'>CONTACT US</h1>
                            <Nav.Link href="https://api.whatsapp.com/send/?phone=6281919862740&text&type=phone_number&app_absent=0">081919862740</Nav.Link>
                            <Nav.Link href="https://api.whatsapp.com/send/?phone=6282269647389&text&type=phone_number&app_absent=0">082269647389</Nav.Link>
                            <br></br>
                        </Column>
                    </Row>
                </div>
                <div className='footer-narrow'>
                    <div className='head-foot'>DINAS PERHUBUNGAN KABUPATEN TULANG BAWANG</div>
                    <br></br>
                    <Row>
                        <Column className='List'>
                            <h1 className='Column'>SOSIAL MEDIA</h1>
                            <div href="#">Facebook</div>
                            <div href="#">Instagram</div>
                            <div href="#">Twitter</div>
                            <br></br>
                        </Column>
                        <Column className='List'>
                            <h1 className='Column'>EMAIL</h1>
                            <div href="#">tulangbawang@gmail.com</div>
                            <br></br>
                        </Column>
                        <Column className='List'>
                            <h1 className='Column'>CONTACT US</h1>
                            <div href="#">081919862740</div>
                            <div href="#">082269647389</div>
                            <br></br>
                        </Column>
                    </Row>
                </div>
        </Box>
    );
  };
  export default Bawah;