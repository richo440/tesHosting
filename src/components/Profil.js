import { Card, Container, Row, Col, Image } from "react-bootstrap"
import kepalaImage from "../assets/images/trending/kepala.jpg"
import strukturImage from "../assets/images/trending/struktur.jpg"
import visiImage from "../assets/images/trending/visi.jpg"

const Profil = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">PROFIL</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="profil">
            <Card className="movieImage">
              <Image src={kepalaImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Drs. EKA SAPUTRA, M.M.</Card.Title>
                  <Card.Text className="text-left">
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={strukturImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Struktur Organisasi
                  </Card.Title>
                  <Card.Text className="text-left">
                  </Card.Text>
                  <Card.Text className="text-left">
                  
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={visiImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Visi dan Misi</Card.Title>
                  <Card.Text className="text-left">
                  </Card.Text>
                  <Card.Text className="text-left">

                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profil
