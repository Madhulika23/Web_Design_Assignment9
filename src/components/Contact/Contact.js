import React from 'react';
import CardResponsive from '../Layout/Card';


const Contact = () => {

  const contantData = [{
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/92b3ee72619665.5bed5a362e2ea.png",
    name: "Infrastructure",
    team_name: "The team which handles the entire office infrastructure department."
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/7150e0102039817.5f2d1fd616da3.png",
    name: "Accounts",
    team_name: "The team handling the accounts department"
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/bb2c31148673017.62d96ea77cef3.png",
    name: "Operations",
    team_name: "The operations team handling the business department"
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/ac3ba8156517915.6368e961ee518.png",
    name: "Human Resources",
    team_name: "The human resources team"
  }];

  return (
    <div className="component">
      <h3 style={{ backgroundColor: "lightblue", color: "white", padding: "10px", fontFamily: "Sans-Serif" }}>Contact</h3>
      <p><i>For more information you can reach out to below teams</i></p>
      <br></br>
      <CardResponsive data={contantData}/>
    </div>
  )
}

export default Contact;