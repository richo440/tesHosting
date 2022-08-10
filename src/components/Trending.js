import "bootstrap/dist/css/bootstrap.min.css";
import "../style/landingPage.css";
import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Trending = () => {
  const [DataResponse, setDataResponse] = useState(null);
  useEffect(() => {
    getBerita();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function getBerita() {
    const axios = require("axios");
    axios
      .get("http://adminmesuji.embuncode.com/api/news?instansi_id=40&per_page=4")
      .then(function(response) {
        setDataResponse(response.data.data.data);
      })
      .catch(function(error) {})
      .then(function() {});
  }

  console.log(DataResponse)
  return (
    <Container>
    <>
    <h1 style={{color:"white"}}> BERITA TERBARU</h1>
      {DataResponse != null ? (
        <Row>
        <div className="row">
          {DataResponse &&
            DataResponse.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6 pt-3">
                  <a className="a-card" href={`/DetailBerita/${item.id}`}>
                  <Card>
                    <Card.Img
                      className="img-beranda" height="200px" width="200px"
                      variant="top"
                      src={item.image_file_data}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                          <Button href={`/DetailBerita/${item.id}`}>Detail</Button>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                  </a>
                </div>
              );
            })}
        </div>
        </Row>
      ) : (
        ""
      )}
    </>
    </Container>
  );
};

export default Trending;