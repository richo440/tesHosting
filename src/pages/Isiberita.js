import "bootstrap/dist/css/bootstrap.min.css";
import "../style/berita.css";
import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { artikelNews } from '../Apinya';
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";

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
    .get(artikelNews)
      .then(function(response) {
        setDataNews(response.data.data.data);
      })
      .catch(function(error) {})
      .then(function() {});
  }

  console.log(DataNews)
  return (
    
      <>
      <NavigationBar/>
        <h1 className='berita-header'> INI BERITA</h1>
        {(DataNews != null) ? 
            <Row className='news-row'>
                {
                    DataNews && DataNews.map((item, index) => {
                    return (
                        <Card className='card-news'>
                            <Card.Body className='card-body'>
                                <Card.Img className='card-image' src={item.image_file_data} alt="" />
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.content}</Card.Text>
                                <Button href={`/BeritaFull/${item.id}`}>Detail</Button>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
                <Bawah/>
            </Row>: ''
        }
        </>
    
  );
};

export default Trending;