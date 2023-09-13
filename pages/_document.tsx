import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    content="Figma UI kit designed to enhance the functionality of ChatGPT"
                    name="OpenInterpreter - AI UI Kit"
                />
                <meta content="OpenInterpreter - AI UI Kit" property="og:title" />
                <meta
                    content="Figma UI kit designed to enhance the functionality of ChatGPT"
                    property="og:description"
                />
                <meta
                    content="%PUBLIC_URL%/fb-og-image.png"
                    property="og:image"
                />
                <meta
                    property="og:url"
                    content="https://OI.net/OI/products/OpenInterpreter-ai-ui-design-kit"
                />
                <meta property="og:site_name" content="OpenInterpreter - AI UI Kit" />
                <meta
                    content="OpenInterpreter - AI UI Kit"
                    property="twitter:title"
                />
                <meta
                    content="Figma UI kit designed to enhance the functionality of ChatGPT"
                    property="twitter:description"
                />
                <meta
                    content="%PUBLIC_URL%/twitter-card.png"
                    property="twitter:image"
                />
                <meta property="og:type" content="Article" />
                <meta content="summary" name="twitter:card" />
                <meta name="twitter:site" content="@OI" />
                <meta name="twitter:creator" content="@OI" />
                <meta property="fb:admins" content="132951670226590" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
