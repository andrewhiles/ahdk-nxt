import App from 'next/app';
import Layout from '../components/Layout';

class MyApp extends App {
  // you can also add to page props here, but in our case we don't need to
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //
  //   return { pageProps };
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
