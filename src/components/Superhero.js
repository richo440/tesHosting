import { Card, Container, Row, Col, Image } from "react-bootstrap"
import galeriaImage from "../assets/images/superhero/galeria.jpg"
import galeribImage from "../assets/images/superhero/galerib.jpg"
import galericImage from "../assets/images/superhero/galeric.jpg"
import galeridImage from "../assets/images/superhero/galerid.jpg"
import galerieImage from "../assets/images/superhero/galerie.jpg"
import galerifImage from "../assets/images/superhero/galerif.jpeg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">GALERI</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={galeriaImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"></Card.Title>
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
              <Image src={galeribImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"></Card.Title>
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
              <Image src={galericImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"></Card.Title>
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
                src={galeridImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"></Card.Title>
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
                src={galerieImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"></Card.Title>
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
              <Image src={galerifImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"></Card.Title>
                  <Card.Text className="text-left">
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero
