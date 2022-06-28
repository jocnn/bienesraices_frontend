import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"

import useProperties from "../hooks/useProperties"

import PropertyPreview from "./propertyPreview"

const ListadoPropiedades = () => {

  const resultado = useProperties()
  // console.log("🚀 ~ file: listProperties.js ~ line 11 ~ ListadoPropiedades ~ resultado", resultado)
  
  const [ propiedades, setPropiedades ] = useState([])
  
  useEffect(() => {
    setPropiedades(resultado)
  }, [])

  return (
    <>
      <h1
        css={css`
          margin-top: -5rem;
          margin-bottom: 5rem;
        `}
      >ListadoPropiedades</h1>

      <ul>
        {
          propiedades.map(propiedad => (
            <PropertyPreview
              key={propiedad.id}
              propiedad={propiedad}
            />
          ))
        }
      </ul>
    </>
  )
}

export default ListadoPropiedades