import * as React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"

import Iconos from "./iconos"

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
    descripcion,
    imagen,
    habitaciones,
    estacionamiento,
    banhos,
    precio,
    categoria,
  } = propiedad
  // console.log("🚀 ~ file: propertyPreview.js ~ line 39 ~ PropertyPreview ~ imagen", imagen)
  
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
      </Contenido>
    </Card>
  )
}

export default PropertyPreview