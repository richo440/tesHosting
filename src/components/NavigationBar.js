import { Card, Navbar, NavDropdown, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <Container>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img src=  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png/663px-LOGO_KABUPATEN_TULANG_BAWANG.png" width={100} height={100}></img>
        <Container> 
          <Navbar.Brand style={{color:"white"}} href="/">DINAS PERIKANAN
          <Card.Text style={{color:"orange"}}>TULANG BAWANG</Card.Text>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-center"></Nav>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#intro">HOME</Nav.Link>
            <Nav.Link href="#trending">BERITA</Nav.Link>
            <Nav.Link href="#trending">ARTIKEL</Nav.Link>
             <NavDropdown title="GALERI" id="collasible-nav-galeri">
              <NavDropdown.Item href="https://dinasperikanan.lampungtengahkab.go.id/upload/strukturorganisasi.jpg">FOTO</NavDropdown.Item>
              <NavDropdown.Item href="https://lumajangkab.go.id/uploads/visimisi/visinew.jpg">VIDEO</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#superhero">PROFIL</Nav.Link>
            <Nav.Link href="#bawah">KONTAK</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#login">LOGIN</Nav.Link>
            <Nav.Link eventKey={2} href="#keluar">KELUAR</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </Container>
  )
}

export default NavigationBar
