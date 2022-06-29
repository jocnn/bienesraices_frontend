import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import * as listPropertiesCSS from "../css/listProperties.module.css"

import useProperties from "../hooks/useProperties"

import PropertyPreview from "./propertyPreview"

let res = null

const ListadoPropiedades = () => {

  res = useProperties()
  // console.log("🚀 ~ file: listProperties.js ~ line 12 ~ ListadoPropiedades ~ resultado", resultado)
  
  const [ propiedades, setPropiedades ] = useState([])
  
  useEffect(() => {
    setPropiedades(res)
  }, [])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
          margin-bottom: 5rem;
        `}
      >
        ListadoPropiedades
      </h2>

      <ul className={listPropertiesCSS.properties}>
        {propiedades.map(propiedad => (
          <PropertyPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades