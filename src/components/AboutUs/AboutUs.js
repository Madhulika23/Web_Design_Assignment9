import React from 'react';
import CardResponsive from '../Layout/Card';

const AboutUs = () => {

  const aboutUsData = [{
    img: "https://via.placeholder.com/150x75",
    name: "John Doe",
    team_name: "CEO"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "Foo Bar",
    team_name: "CTO"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "Jane",
    team_name: "Director"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "Mark",
    team_name: "Vice President"
  }];

  return (
    <div className="component">
      <h3 style={{ backgroundColor: "lightblue", color: "white", padding: "10px", fontFamily: "Sans-Serif" }} >About Us</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  
      </p>
      <div className="aboutUS-container">
        <p>Our Team</p>
        <CardResponsive data={aboutUsData} />
      </div>
    </div>
  )
}

export default AboutUs;