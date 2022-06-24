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
            childrenImageSharp {
              gatsbyImageData
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
    imagen: inicio.imagen.localFile.childrenImageSharp[0].gatsbyImageData
  }))
  
}

export default useIndex