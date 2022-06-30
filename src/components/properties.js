import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import Iconos from "./iconos"

import Layout from "./layout"

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

const Aside = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75AB00;
  }
  .agente {
    margin-top: 4rem;
    border-radius: 1rem;
    background-color: #75AB00;
    padding: 3rem;
    color: #FFF;

    p {
      margin: 0;
    }
  }
`

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
  // console.log("🚀 ~ file: property.js ~ line 80 ~ Property ~ nodes", nodes[0])

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
      <Contenido>
        <main>
          <GatsbyImage
            image={imagen.localFile.childImageSharp.gatsbyImageData}
            alt="imagen de propiedad"
          />
          <p>{descripcion.data.descripcion}</p>
        </main>
        <Aside>
          <p className="precio">${precio}</p>
          <Iconos
            banhos={banhos}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />

          <div className="agente">
            <h2>Vendedor: </h2>
            <p>{agente.nombre}</p>
            <p>Telefono: {agente.telefono}</p>
            <p>Email: {agente.email}</p>
          </div>
        </Aside>
      </Contenido>
    </Layout>
  )
}

export default Properties
