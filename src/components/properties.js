import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"

export const query = graphql`
  query($id: String!) {
    allStrapiPropiedad(filter: { id: { eq: $id } }) {
      nodes {
        imagen {
          localFile {
            sharp: childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        id
        habitaciones
        estacionamiento
        banhos
        precio
        nombre
        categoria {
          nombre
        }
        descripcion {
          data {
            descripcion
          }
        }
        agente {
          email
          nombre
          id
          telefono
        }
      }
    }
  }
`

const Properties = ({ data: { allStrapiPropiedad: { nodes } } }) => {
  console.log("🚀 ~ file: property.js ~ line 45 ~ Property ~ nodes", nodes[0])

  return (
    <Layout>
      <h1>Properties</h1>
    </Layout>
  )
}

export default Properties
