import React from 'react';
import {Row, Col, Container, Col as Column,} from 'react-bootstrap';
import '../style/Bawah.css';


const Bawah = () => {
    return (
                <div className='Box'>
                    <div className='head-foot'>DINAS PERIKANAN KABUPATEN TULANG BAWANG</div>
                    <br></br>
                    <br></br>
                    <Row>
                    <Col md={4} className="bawah" id="bawah">
                        <Column>
                            <h1 className='Column'>Tentang Kami</h1>
                            <div className='Columns'>Dinas Perikanan</div>
                            <div className='Columns'>Tulang Bawang</div>
                        </Column>
                        <Column>
                            <h1 className='Column'>Pelayanan</h1>
                            <div className='Columns'>hahaha</div>
                            <div className='Columns'>huhuhu</div>
                        </Column>
                        <Column>
                            <h1 className='Column'>Hubungi Kami</h1>
                            <div className='Columns'>081919862740</div>
                            <div className='Columns'>081919862777</div>
                        </Column>
                        <Column>
                            <h1 className='Column'>Sosial Media</h1>
                            <div className='Columns'>Facebook</div>
                            <div className='Columns'>Instagram</div>
                            <div className='Columns'>Twitter</div>
                        </Column>
                        </Col>
                    </Row>
                </div>
    );
  };
  export default Bawah;