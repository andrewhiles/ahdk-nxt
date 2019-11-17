import Link from 'next/link';

const Header = () => (
    <div className="header-container">
        <h1 className="header-qconf">Quantumconf</h1>
        <ul className="header-links">
            <li><Link href="/" >
                <a>Home</a>
            </Link>
            </li>
            <li>
                <Link href="/sessions" >
                    <a>Sessions</a>
                </Link>
            </li>
            <li>
                <Link href="/workshops" >
                    <a>Workshops</a>
                </Link>
            </li>
            <li>
                <Link href="/location" >
                    <a>Location</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
        .header-container {
          background-color: #222222;
          height: auto;
          padding: 10px;
          color: whitesmoke;
      }
      .header-qconf {
        font-family: 'Permanent Marker', cursive;
        font-variant: small-caps;
        font-size: 75px;
        -webkit-transform: skew(-15deg, -15deg);
        background-image: -webkit-linear-gradient(#FF0FF8 0%,  #F9F9F7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-filter: drop-shadow(2px 2px 20px #f008b7);
        padding-top: 20px;
        padding-bottom: 80px;
      }
      .header-links {
          display: inline;
      }
      .header-links ul, li {
        list-style-type: none;
        float: right;
        padding: 3px;
        color: #F9F9F7;
    }
    .header-links a {
        text-decoration: none;
        color: whitesmoke;
        -webkit-transition: color 1s;
        transition: color 1s;
    }
    .header-links a:hover {
        color: #FF0FF8;
    }
    `}</style>
    </div>
)

export default Header;
