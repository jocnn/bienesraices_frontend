import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const useIndex = () => {

  const result = useStaticQuery(graphql`
    query {
      allStrapiPagina(filter: {titulo: {eq: "Inicio"}}) {
        nodes {
          titulo
          contenido
          id
        }
      }
    }
  `)

  return(result.allStrapiPagina.nodes[0])
  
}

export default useIndex