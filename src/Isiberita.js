import NavigationBar from "./components/NavigationBar";
import Bawah from "./components/Bawah";
import "./style/landingPage.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';

function Isiberita() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Berita();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Berita() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=40&per_page=20').then(function (response) {
    setDataResponse(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
  }

  console.log(DataResponse)
    return (
      <Container>
    <>
    <NavigationBar/>
      {
        (DataResponse != null) ? 
         
              <div className="row" >
                <div className="berita-halaman">
                  <h1>Halaman Berita</h1>
                  <br></br>
                  <br></br>
                </div>
                
        {
          DataResponse && DataResponse.map((item, index) => {
            return (
              
                <Card className="card-artikel-berita">
                            <Card className='mt-4'>
                                <Card.Img variant="dark" height="200px" width="200px" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <p className='read-more'>
                                  <a href={`/ShowBerita/${item.id}`}>Read More</a>
                                </p>                                
                                </Card.Body>
                            </Card>
                            </Card>
            )
          })
        }
        </div>: ''
      }
      <Bawah/>
      </>
      </Container>
  );
  
}

export default Isiberita;