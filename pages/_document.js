import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyle from '../styles/global';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags}
  }
  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
					<Glob alStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
