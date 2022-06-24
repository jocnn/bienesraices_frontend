import * as React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import * as heroCSS from "../css/hero.module.css"

import useIndex from "../hooks/useIndex"

import Layout from "../components/layout"

const ImageBackground = styled(GatsbyImage)`
  height: 60rem;
`

const Index = () => {

  const index = useIndex()
  //console.log("🚀 ~ file: index.js ~ line 17 ~ Index ~ index", index)
  
  const { titulo, contenido, imagen } = index[0]
  
  return (
    <Layout>
      <div 
        className={heroCSS.container}
      >
        <h1 
          className={heroCSS.title}
        >Venta de casas y departamentos exclusivos</h1>
        <ImageBackground
          className={heroCSS.imagen}
          image={imagen}
          alt="imagen de página" />
      </div>
      <main>
        <div css={css`
          max-width: 80rem;
          margin: 0 auto;
        `}>
          <h1>{titulo}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >{contenido}</p>
        </div>
      </main>
    </Layout>
  )
}

export default Index