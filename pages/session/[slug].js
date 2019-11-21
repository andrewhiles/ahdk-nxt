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

Page.getInitialProps = async ({ query, req }) => {
  let api = ""
  if(process.browser){
    api = window.location.hostname === "localhost" ? "http://localhost:3000/api" : "https://ahdk-nxt.now.sh/api"
  }else{
      api = req.headers.host.indexOf("localhost") !== -1 ? "http://localhost:3000/api" : "https://ahdk-nxt.now.sh/api"
  }
  const res = await fetch(`${api}/session/${query.slug}`);
  const session = await res.json();
  return {
    session,
  };
};
export default Page;