import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-us">
        <Head />
        <body className="preload">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
