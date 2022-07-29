import { Card, Container,ListGroup, Row, Col, Image } from "react-bootstrap"
import slideqImage from "../assets/images/trending/slideq.jpeg"
import rapatImage from "../assets/images/trending/rapat.jpg"
import mancingImage from "../assets/images/trending/mancing.jpg"

const Trending = () => {
  return (
    <Container>
    <div>
        <br />
        <h1 className="text-white">TRENDING</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={slideqImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">HUT TULANG BAWANG</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={rapatImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    RAPAT DINAS PERIKANAN
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="">
            <Card className="">
                <ListGroup className=" text-center">
                <h1 className="text-dark">POPULAR</h1>
                  <ListGroup.Item
                    className="cardlist"
                    action
                    variant="secondary"
                  >
                    Dinas Perikanan Melakukan Penebaran Benih Ika...
                    <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="cardlist"
                    action
                    variant="secondary"
                  >
                    Dinas Perikanan Tulang Bawang Memulai Apel Pa...
                    <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="cardlist"
                    action
                    variant="secondary"
                  >
                    Kepala Dinas Perikanan Mengikuti Rapat Paripu...
                    <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="cardlist"
                    action
                    variant="secondary"
                  >
                    KEPALA DINAS PERIKANAN KABUPATEN TULANG BAWAN..
                    <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="cardlist"
                    action
                    variant="secondary"
                  >
                    DKP Lampung Mengadakan Pelatihan Pembuatan Garam
                    <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                  </ListGroup.Item>
                </ListGroup>
               
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
    </div>
    </Container>
  )
}

export default Trending
