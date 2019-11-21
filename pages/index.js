const Home = () => (
  <div className="home">
    <div className="details">
      <h1>QConf 2019</h1>
      <h2>
        A single day conference featuring technical specialists
        sharing their experiences working with a wide range of different
        cutting-edge technologies and practices. Curated by members of the Quantum unit in Liberty IT, Belfast.
      </h2>
      <h3><strike>Tickets: £120.00 + VAT</strike></h3>
      <h3>SOLD OUT!</h3>
      <p>
        Thurs 21st November 2019
        <br />
        Liberty IT, Belfast
      </p>
    </div>
    <style jsx>
      {`
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
        `}
    </style>
  </div>
);

export default Home;
