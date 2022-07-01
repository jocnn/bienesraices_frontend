import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import * as listPropertiesCSS from "../css/listProperties.module.css"

import useProperties from "../hooks/useProperties"
import useFilter from "../hooks/useFilter"

import PropertyPreview from "./propertyPreview"

let res = null
let propert = null

const ListadoPropiedades = () => {

  res = useProperties()
  // console.log("🚀 ~ file: listProperties.js ~ line 15 ~ ListadoPropiedades ~ resultado", res)
  
  const [propiedades] = useState(res)
  propert = propiedades
  const [ filtradas, setFiltradas ] = useState([])
  
  const { categoria, FilterUI } = useFilter()
  // console.log("🚀 ~ file: listProperties.js ~ line 21 ~ ListadoPropiedades ~ categoria", categoria)
  
  useEffect(() => {
    if (categoria) {
      const filtro = propert.filter(
        propiedad => propiedad.categoria === categoria
      )
      // console.log("🚀 ~ file: listProperties.js ~ line 28 ~ useEffect ~ filtro", filtro)
      setFiltradas(filtro)
    } else {
      setFiltradas(propert)
    }
  }, [categoria])

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

      {FilterUI()}

      <ul className={listPropertiesCSS.properties}>
        {filtradas.map(propiedad => (
          <PropertyPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades