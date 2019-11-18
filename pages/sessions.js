import Link from "next/link";
import fetch from "isomorphic-unfetch";

class Sessions extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`${process.env.API}/session`);
    const sessions = await res.json();
    return { sessions };
  }
  constructor(props) {
    super(props);
    this.state = props.sessions;
  }
  render() {
    const items = this.state.map((session, i) => {
      return (
        <div key={i}>
          <Link as={`/session/${session.slug}`} href={"/session/[slug]/"}>
            <a>
              <div className="session-card">
                <div className="session-timeslot">
                  <p>{session.timeslot}</p>
                </div>
                <div className="session-speaker">
                  <img src={session.avatar} />
                </div>
                <div className="session-snippet">
                  <h2>{session.title}</h2>
                  <h3>{session.speaker} - {session.team}</h3>
                  <p>{session.position}</p>
                  <p>{session.blurb}</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      );
    });
    return (
      <>
        <div className="session-container">
          <h1>Sessions</h1>
          {items}
        </div>
      </>
    );
  }
}

export default Sessions;
