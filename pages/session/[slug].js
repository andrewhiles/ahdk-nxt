import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

const Page = ({ session: session }) => {
  return session ? (
    <>
      <h1>{session.title}</h1>
      <h2>{session.speaker}</h2>
      <h2>{session.position}</h2>
      <h2>{session.team}</h2>
      <h2>{session.timeslot}</h2>
      <h2>{session.duration} minutes</h2>
    </>
  ) : (
    <Layout>
      <p>Uh oh...Something's went wrong :(</p>
    </Layout>
  );
};

Page.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/api/session/${query.slug}`);
  const session = await res.json();
  return {
    session,
  };
};

export default Page;