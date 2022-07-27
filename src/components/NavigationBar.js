import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img src=  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png/663px-LOGO_KABUPATEN_TULANG_BAWANG.png" width={100} height={100}></img>
        <Container> 
          <Navbar.Brand href="/">DINAS PERIKANAN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-center"></Nav>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#intro">HOME</Nav.Link>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">GALERI</Nav.Link>
            <NavDropdown title="PROFIL" id="collasible-nav-galeri">
            <NavDropdown.Item href="#profil">Kepala</NavDropdown.Item>
              <NavDropdown.Item href="#profil">Struktur</NavDropdown.Item>
              <NavDropdown.Item href="#profil">Visi dan Misi</NavDropdown.Item>
            </NavDropdown>
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
  )
}

export default NavigationBar
