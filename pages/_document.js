import Document, { Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width" />
          <meta name="location" content="ards" />
          <link rel="stylesheet" href="/style.css" />
          {/* TODO: look at a better way to load webfonts...DK suggestions? */}
          <link href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}