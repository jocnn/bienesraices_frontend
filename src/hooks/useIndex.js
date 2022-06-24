import { graphql, useStaticQuery } from "gatsby"

const useIndex = () => {

  const result = useStaticQuery(graphql`
  query {
    allStrapiPagina(filter: {titulo: {eq: "Inicio"}}) {
      nodes {
        titulo
        contenido
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(
                transformOptions: {duotone: {highlight: "#222222", shadow: "#192550", opacity: 30}}
                sizes: "1200px"
              )
            }
          }
        }
      }
    }
  }
  `)

  //console.log('result: ', result)

  return result.allStrapiPagina.nodes.map( inicio => ({
    id: inicio.id,
    titulo: inicio.titulo,
    contenido: inicio.contenido,
    imagen: inicio.imagen.localFile.childImageSharp.gatsbyImageData
  }))
  
}

export default useIndex