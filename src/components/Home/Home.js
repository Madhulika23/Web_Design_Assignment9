import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="component">
      <h3 style={{ backgroundColor: "lightblue", color: "white", padding: "10px", fontFamily: "Sans-Serif" }}>Welcome to Assignment 9 - Job Search Portal</h3>
      <Carousel interval={2000} className="carousel">
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/504ba7141411221.6253bd1be15c1.jpg"
            alt="First slide" 
          />
          <Carousel.Caption>
            <h3 style={{ fontFamily: "Sans-Serif" }}>Job Search ends here!</h3>
            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</i></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/dc4371141411221.6253bd1be2f01.jpg"
            alt="Second slide" 
          />

          <Carousel.Caption>
            <h3 style={{ fontFamily: "Sans-Serif" }}>Open Source and Start Up Jobs</h3>
            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/4ce0c4141411221.6253bd1be236e.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontFamily: "Sans-Serif" }}>Jobs with varying diversity</h3>
            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</i></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home;