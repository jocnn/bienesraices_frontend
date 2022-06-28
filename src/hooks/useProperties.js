import { graphql, useStaticQuery } from "gatsby"

const useProperties = () => {

  const result = useStaticQuery(graphql`
    query {
      allStrapiPropiedad {
        nodes {
          id
          habitaciones
          estacionamiento
          nombre
          precio
          descripcion {
            data {
              internal {
                content
              }
            }
          }
          categoria {
            nombre
          }
          banhos
          agente {
            email
            nombre
            telefono
          }
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData
                fluid(maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  // console.log("🚀 ~ file: useProperties.js ~ line 44 ~ useProperties ~ result", result)

  return result.allStrapiPropiedad.nodes.map(propiedad => ({
    id: propiedad.id,
    habitaciones: propiedad.habitaciones,
    estacionamiento: propiedad.estacionamiento,
    nombre: propiedad.nombre,
    precio: propiedad.precio,
    descripcion: propiedad.descripcion.data.internal.content,
    categoria: propiedad.categoria.nombre,
    banhos: propiedad.banhos,
    agente: propiedad.agente,
    imagen: propiedad.imagen.localFile.childImageSharp.gatsbyImageData
  }))
}

export default useProperties