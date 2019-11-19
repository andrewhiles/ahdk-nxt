import Link from "next/link";

const Header = () => (
  <div className="header-container">
    <h1 className="header-qconf">Quantumconf</h1>
    <ul className="header-links">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/session">
          <a>Sessions</a>
        </Link>
      </li>
      <li>
        <Link href="/workshops">
          <a>Workshops</a>
        </Link>
      </li>
      <li>
        <Link href="/location">
          <a>Location</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      .header-container {
        background-color: #222222;
        height: auto;
        padding: 20px;
        color: whitesmoke;
      }
      .header-links {
        display: inline;
      }
      .header-links ul,
      li {
        list-style-type: none;
        float: right;
        padding: 3px;
        color: #f9f9f7;
      }
      .header-links a {
        text-decoration: none;
        color: whitesmoke;
        -webkit-transition: color 1s;
        transition: color 1s;
      }
      .header-links a:hover {
        color: #ff0ff8;
      }
      .header-qconf {
        font-family: "Permanent Marker", cursive;
        font-variant: small-caps;
        font-size: 70px;
        -webkit-transform: skew(-15deg, -15deg);
        background-image: -webkit-linear-gradient(#f008b7 0%, #f9f9f7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-filter: drop-shadow(2px 2px 20px #f008b7);
        padding-top: 20px;
        padding-bottom: 80px;
      }
      @media only screen (max-width: 767px) {
        .header-qconf {
          font-family: "Permanent Marker", cursive;
          font-variant: small-caps;
          font-size: 70px;
          -webkit-transform: skew(-15deg, -15deg);
          background-image: -webkit-linear-gradient(#f008b7 0%, #f9f9f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-filter: drop-shadow(2px 2px 20px #f008b7);
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
      @media only screen and (min-width: 768px) and (max-width: 959px) {
        .header-qconf {
          font-family: "Permanent Marker", cursive;
          font-variant: small-caps;
          font-size: 120px;
          -webkit-transform: skew(-15deg, -15deg);
          background-image: -webkit-linear-gradient(#f008b7 0%, #f9f9f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-filter: drop-shadow(2px 2px 20px #f008b7);
          padding-top: 20px;
          padding-bottom: 80px;
        }
      }
      @media only screen and (min-width: 960px) and (max-width: 1200px) {
        .header-qconf {
          font-family: "Permanent Marker", cursive;
          font-variant: small-caps;
          font-size: 150px;
          -webkit-transform: skew(-15deg, -15deg);
          background-image: -webkit-linear-gradient(#f008b7 0%, #f9f9f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-filter: drop-shadow(2px 2px 20px #f008b7);
          padding-top: 20px;
          padding-bottom: 80px;
        }
      }
      @media only screen and (min-width: 1201px) and (max-width: 1800px) {
        .header-qconf {
          font-family: "Permanent Marker", cursive;
          font-variant: small-caps;
          font-size: 200px;
          -webkit-transform: skew(-15deg, -15deg);
          background-image: -webkit-linear-gradient(#f008b7 0%, #f9f9f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-filter: drop-shadow(2px 2px 20px #f008b7);
          padding-top: 20px;
          padding-bottom: 130px;
        }
      }
    `}</style>
  </div>
);

export default Header;
