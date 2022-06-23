import * as React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/react"

const Layout = ({children}) => {
  return (
    <>
      <Global 
        styles={css`
          :root {
            --separacion: 1.5rem;

            --fuentePrincipal: 'Lato', sans-serif;
            --fuenteSecundaria: 'Roboto', sans-serif;
          }
          html {
            box-sizing: border-box;
            font-size: 62.5%;
          }
          *, *::before, *::after {
            box-sizing: inherit;
          }
          body {
            font-family: var(--fuentePrincipal);
            font-size: 1.6rem;
            line-height: 2;	/* inter-lineado de las fuentes */
          }
          .contenedor {
            max-width: 120rem;
            width: 90%;
            margin: 0 auto;
          }
          h1, h2 {
            font-weight: 400;
            margin: calc( var(--separacion) / 2 ) 0;
            text-align: center;
          }
          h1, h2, h3 {
            line-height: 1.5;
          }
          h1 {
            font-size: 4.4rem;
          }
          h2 {
            font-size: 3.6rem;
          }
          h3 {
            font-family: var(--fuenteSecundaria);
            font-size: 2.8rem;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          img {
            max-width: 100%;
            display: block;
            height: auto;
          }
        `}
      />
      <Helmet>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
          crossOrigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap" 
          rel="stylesheet" /> 
        <title>Bienes Raices Gatsby</title>
      </Helmet>
      
      <h1>Mi Sitio en Gatsby</h1>

      {children}

    </>
  )
}

export default Layout