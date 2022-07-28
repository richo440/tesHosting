import "bootstrap/dist/css/bootstrap.min.css";
import "../style/landingPage.css";
import React, { Component } from "react";
import { Row, Container, Nav, ListGroup, Card } from "react-bootstrap";

const Profil = () => {
  return (
    <>
      <Container>
      <br />
      <div className id="profil">
        <h1 className="text-white">PROFIL</h1>
        <div className="text-white">
          <br></br>
        <Row>
          <div className="col-lg-6 col-md-12">
            <img
              src="http://services.tulangbawangkab.go.id/assets/images/web/13/1635819270Kadis-Eka-Saputra.jpg"
              style={{ width: "400px", height: "auto" }}
            />
          </div>
          <div className="col-lg-6 col-md-12 align-content-center">
            <br></br>
            <br></br>
            <br></br>
            <h2>Drs. EKA SAPUTRA, M.M.</h2>
            <br></br>
            <h3>Tentang Instansi</h3>
            <p className="justify">
            Dinas Perikanan Tulang Bawang diPimpin langsung oleh Drs. Eka Saputra, M.M.
            <br></br>
            Dinas Perikanan merupakan unsur pelaksana Otonomi Daerah yang dipimpin oleh seorang Kepala Dinas yang berkedudukan dibawah dan bertanggung jawab kepada Bupati melalui Sekretaris Daerah Kabupaten.
            </p>
          </div>
          </Row>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Profil;
