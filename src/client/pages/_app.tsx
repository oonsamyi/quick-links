import 'normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import { Layout as DefaultLayout } from '../uiKit/layout'
import React from 'react'
import { useApollo } from '../apollo/useApollo'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  const Layout = getLayout(Component)

  return (
    <>
      <Head>
        <title>Quick Links</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-right"
            limit={2}
            closeOnClick={false}
            autoClose={4000}
            newestOnTop
            draggablePercent={20}
          />
        </Layout>
      </ApolloProvider>

      <style jsx global>{`
        html {
          scrollbar-gutter: stable;
        }

        body {
          font-family: Nunito, sans-serif;
          color: black;
          background: #21c9ad1f;
          background: linear-gradient(
            90deg,
            rgba(235, 235, 235, 0.8) 0%,
            rgba(var(--primaryColorBase), 0.2) 100%
          );
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          outline-color: var(--primaryColor);
        }

        :root {
          --primaryColorBase: 33, 201, 173;
          --secondaryColorBase: 255, 155, 0;
          --primaryColor: rgba(var(--primaryColorBase), 1);
          --secondaryColor: rgba(var(--secondaryColorBase), 1);
          --toastify-color-success: var(--primaryColor);
        }

        input,
        textarea {
          padding: 0;
          border: none;
          outline: none;
          background-color: transparent;
        }

        button {
          padding: 0;
          border: none;
          cursor: pointer;
          background-color: transparent;
          text-align: start;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .Toastify__toast-body {
          font-size: 14px;
          line-height: 22px;
          color: black;
        }

        .Toastify__toast-icon {
          margin-inline-end: 14px;
        }
      `}</style>
    </>
  )
}

function getLayout(Component: React.ComponentType): React.ComponentType {
  // Для страниц 404, 500 и т.д. лэйаут не рендерим
  if (Component.displayName === 'ErrorPage')
    return ({ children }) => <>{children}</>

  return (Component as any).Layout || DefaultLayout
}
