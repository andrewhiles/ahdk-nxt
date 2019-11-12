import Header from '../components/Header';
import Footer from '../components/Footer';
import data from '../data/agenda.json';

class Sessions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
    }
    render() {
        const items = this.state.data.sessions.map((session) => {
            return <div>
                <p>{session.title} - {session.speaker}</p>
            </div>
        })
        return (
            <>
                <Header />
                <div className='session-container'>
                    <h1>Sessions from the following...</h1>
                    {items}
                </div>
                <Footer />
            </>
        );
    }
}

export default Sessions;