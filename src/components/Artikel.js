import "bootstrap/dist/css/bootstrap.min.css";
import "../style/landingPage.css";
import React from "react";
import { Row, Card, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const Artikel = () => {
  const [DataResponse, setDataResponse] = useState(null);
  useEffect(() => {
    getArticle();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function getArticle() {
    const axios = require("axios");
    axios
      .get(
        "http://adminmesuji.embuncode.com/api/article?instansi_id=8&per_page=4"
      )
      .then(function(response) {
        setDataResponse(response.data.data.data);
      })
      .catch(function(error) {})
      .then(function() {});
  }

  return (
    <Container>
    <>
    <h1 style={{color:"white"}}> ARTIKEL TERBARU</h1>
      {DataResponse != null ? (
        <Row>
        <div className="row">
          {DataResponse &&
            DataResponse.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6 pt-3">
                  <Card>
                    <Card.Img
                      className="img-beranda"
                      variant="top"
                      src={item.image_file_data}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                          <Button href={`/DetailArtikel/${item.id}`}>Read More</Button>
                        </Card.Text>
                    </Card.Body>
                  </Card>
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

export default Artikel;
