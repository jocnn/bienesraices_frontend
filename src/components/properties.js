import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Iconos from "./iconos"

import Layout from "./layout"

export const query = graphql`
  query ($id: String!) {
    allStrapiPropiedad(filter: { id: { eq: $id } }) {
      nodes {
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200)
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
          telefono
        }
      }
    }
  }
`

const Properties = ({
  data: {
    allStrapiPropiedad: { nodes },
  },
}) => {
  console.log("🚀 ~ file: property.js ~ line 45 ~ Property ~ nodes", nodes[0])

  const {
    nombre,
    habitaciones,
    banhos,
    precio,
    estacionamiento,
    imagen,
    descripcion,
    agente,
  } = nodes[0]

  return (
    <Layout>
      <h1>{nombre}</h1>
      <div>
        <main>
          <GatsbyImage
            image={imagen.localFile.childImageSharp.gatsbyImageData}
            alt="imagen de propiedad"
          />
          <p>{descripcion.data.descripcion}</p>
        </main>
        <aside>
          <p>${precio}</p>
          <Iconos
            banhos={banhos}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />

          <div>
            <h2>Vendedor: </h2>
            <p>{agente.nombre}</p>
            <p>Telefono: {agente.telefono}</p>
            <p>Email: {agente.email}</p>
          </div>
        </aside>
      </div>
    </Layout>
  )
}

export default Properties
