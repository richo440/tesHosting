import NavigationBar from "./components/NavigationBar";
import Bawah from "./components/Bawah";
import "./style/landingPage.css";
import {Card, Container} from "react-bootstrap";
import {useState, useEffect} from "react";

function Isiartikel() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Artikel();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Artikel() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/article?instansi_id=5&per_page=20').then(function (response) {
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
         
              <div className="row">
                <div className="artikel-halaman">
                  <h1>Halaman Artikel</h1>
                  <br></br>
                  <br></br>
                </div>
        {
          DataResponse && DataResponse.map((item, index) => {
            return (
              
                <Card className="card-artikel-berita">
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <p className='read-more'>
                                  <a href={`ShowArtikel/${item.id}`}>Read More</a>
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

export default Isiartikel;