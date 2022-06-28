import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Iconos = ({ banhos, estacionamiento, habitaciones }) => {
  
  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)
  // console.log("🚀 ~ file: iconos.js ~ line 19 ~ Iconos ~ iconos", iconos)

  const imgIcons = iconos.edges
  // console.log("🚀 ~ file: iconos.js ~ line 26 ~ Iconos ~ imgIcons", imgIcons)
  
  return (
    <ul>
      <li>
        <img src={imgIcons[2].node.publicURL} alt="icono de banhos" />
        <p>{banhos}</p>
      </li>
      <li>
        <img src={imgIcons[1].node.publicURL} alt="icono de estacionamiento" />
        {estacionamiento}
      </li>
      <li>
        <img src={imgIcons[0].node.publicURL} alt="icono de habitaciones" />
        {habitaciones}
      </li>
    </ul>
  )
}

export default Iconos