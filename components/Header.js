import Link from 'next/link';

const Header = () => (
    <div className="header-container">
        <ul>
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
          background-color: cornflowerblue;
          height: auto;
          padding: 15px;
          color: whitesmoke;
      }
      ul {
          text-align: right;
      }
      ol, ul {
        list-style: none;
    }
    `}</style>
    </div>
)

export default Header;
