import axios from 'axios';
import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Container, Button, Row } from 'react-bootstrap';
import '../style/landingPage.css';

const Trending = () => {
    const [DataNews, setDataNews] = useState(null);
    useEffect(() => {
        getNews();
        return () => {
            setDataNews(null);
        };
    }, []);

    function getNews() {
        const axios = require("axios");
        axios
            .get(("http://adminmesuji.embuncode.com/api/news?instansi_id=40&per_page=4"))
            .then(function(response) {
                setDataNews(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
      <Container>
        <>
        <h1 style={{color:"white"}}> BERITA TERBARU</h1>
        {(DataNews != null) ? 
            <Row>
                {
                    DataNews && DataNews.map((item, index) => {
                    return (
                        <Card className='card-news'>
                            <Card.Body className='card-body'>
                                <Card.Img className='card-image' src={item.image_file_data} alt="" />
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.content}</Card.Text>
                                <button>Detail</button>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
            </Row>: ''
        }
        </>
        </Container>
    );
};

export default Trending;