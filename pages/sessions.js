import data from "../data/agenda.json";

class Sessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    const items = this.state.data.sessions.map((session, i) => {
      const avatarUrl = session.avatar;

      return (
        <>
          <div className="session-card" key={i}>
            <div className="session-timeslot">
              <p>{session.timeslot}</p>
            </div>
            <div className="session-speaker">
              <img src={(session.avatar)} />
            </div>
            <div className="session-snippet">
              <h2>{session.title}</h2>
              <h3>{session.speaker}</h3>
              <p>{session.position}</p>
              <p>{session.blurb}</p>
            </div>
          </div>
        </>
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
