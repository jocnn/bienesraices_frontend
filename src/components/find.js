import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as findCSS from "../css/find.module.css"

const Find = () => {

  const { imagen } = useStaticQuery(graphql`
    query  {
      imagen: file(relativePath: {eq: "encuentra.jpg"}) {
        sharp: childImageSharp {
          data: gatsbyImageData
        }
      }
    }
  `)

  return (
    <div
      className={findCSS.container}
    >
      <GatsbyImage
        className={findCSS.imagen}
        image={imagen.sharp.data}
        alt="imagen de página"
      />
      <div
        className={findCSS.titles}
      >
        <h3
          className={findCSS.title}
        >Encuentra la casa de tus sueños</h3>
        <p
          className={findCSS.subtitle}
        >15 años de experiencia</p>
      </div>
    </div>
  )
}

export default Find