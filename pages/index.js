import React from 'react';

const Home = () => (
  <div className="home">
    <div className="details">
    <h1>QConf 2019</h1>
    <h2>A single day conference curated by the Quantum Unit, with developers sharing their experiences working with a wide range of different cutting-edge technologies.</h2>
    <p>8th - 10th December 2019<br/>Liberty IT, Belfast</p>
    </div>
    <style jsx>{`
            .home {
              background-image: url('${require('../public/ah.jpg')}'), url('${require('../public/dk.jpg')}'), url('${require('../public/moc.jpg')}');
              background-position: top left, top center, top right;
              background-repeat: no-repeat, no-repeat, no-repeat;
              background-size: 34%, 34%, 34%;
              padding-top: 25%;
            }
            .details {
              margin: 20px;
              padding: 10px;
            }
        `}</style>
  </div>
);

export default Home;
