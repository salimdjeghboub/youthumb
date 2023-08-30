import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          {/* Custom text section */}
          <div style={{ margin: "20px", textAlign: "center" }}>
            <h1>About YouTube Thumbnail Downloader <span style={{ fontWeight: "bold" }}></span></h1>
            <p>
              The video thumbnail that’s attached to the video on such platforms as YouTube is
              the face of the video and can play an important role in a user's decision to
              click on it. Very often you might need the thumbnail of a video separately for
              a variety of uses: to make a collage of different video thumbnails for your
              blog post, design a cover image for your channel using various video
              thumbnails, use it in a social media post in case it’s not generated
              automatically, and so on.
            </p>
            <p>
              In any case, it’s great to have a tool that allows quickly grabbing and
              downloading the thumbnail on your device. Our YouTube Thumbnail Downloader
              does exactly that. It allows you to generate the thumbnail of any YouTube
              video and download it in just a few seconds. Let’s quickly go through the
              steps you need to complete to get the thumbnail on your device.
            </p>
          </div>
          {/* End of custom text section */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
