import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Intro() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="intro">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://perikanan.sukabumikab.go.id/assets/images/slider/3b95d253b129ca84180a5119bf205469.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://perikanan.sukabumikab.go.id/assets/images/slider/3b95d253b129ca84180a5119bf205469.JPG"
          
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://perikanan.sukabumikab.go.id/assets/images/slider/3b95d253b129ca84180a5119bf205469.JPG"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Intro;