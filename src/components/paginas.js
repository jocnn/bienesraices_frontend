import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import Layout from "./layout"
import ListadoPropiedades from "./listProperties"

const Contenido = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

export const query = graphql`
  query ($id: String!) {
    allStrapiPagina(filter: { id: { eq: $id } }) {
      nodes {
        titulo
        contenido
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200)
            }
          }
        }
      }
    }
  }
`

const Paginas = ({ data: { allStrapiPagina: { nodes } } }) => {
  // console.log("🚀 ~ file: pages.js ~ line 40 ~ Pages ~ nodes", nodes)

  const { titulo, contenido, imagen } = nodes[0]

  return (
    <Layout>
      <main>
        <h1>{titulo}</h1>
        <Contenido>
          <GatsbyImage
            image={imagen.localFile.childImageSharp.gatsbyImageData}
            alt="imagen de propiedad"
          />
          <p>{contenido}</p>
        </Contenido>
      </main>
      {
        ( titulo === "Propiedades" ) ? (
          <ListadoPropiedades />
        ) : null
      }
    </Layout>
  )
}

export default Paginas
