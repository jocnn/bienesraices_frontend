import * as React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import urlSlug from "url-slug"

import Iconos from "./iconos"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75AB00;
  width: 100%;
  color: #FFF;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`

const Card = styled.div`
  border: 1px solid #E1E1E1;
  img {
    max-width: 100%;
  }
`

const Contenido = styled.div`
  padding: 2rem;
  h3 {
    font-family: var(--fuentePrincipal);
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }
  .precio {
    font-size: 2rem;
    color: #75AB00;
  }
`

const PropertyPreview = ({ propiedad }) => {
  
  const {
    nombre,
    imagen,
    habitaciones,
    estacionamiento,
    banhos,
    precio,
  } = propiedad
  // console.log("🚀 ~ file: propertyPreview.js ~ line 52 ~ PropertyPreview ~ imagen", imagen)
  
  return (
    <Card>
      <GatsbyImage
        image={imagen} 
        alt="imagen propiedad"
      />
      <Contenido>
        <h3>{nombre}</h3>
        <p className="precio">{precio}</p>
        <Iconos
          banhos={banhos}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />
        <Boton
          to={`/${urlSlug(nombre)}`}
        >
          Visita la Propiedad
        </Boton>
      </Contenido>
    </Card>
  )
}

export default PropertyPreview