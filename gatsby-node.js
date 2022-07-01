const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPropiedad {
        nodes {
          id
          nombre
        }
      }
      allStrapiPagina {
        nodes {
          id
          titulo
        }
      }
    }
  `)
  // console.log("🚀 ~ file: gatsby-node.js ~ line 20 ~ exports.createPages= ~ result", JSON.stringify(result))

  if (result.error) {
    reporter.panic("No hubo resultados", result.error)
  }

  const paginas = result.data.allStrapiPagina.nodes
  // console.log("🚀 ~ file: gatsby-node.js ~ line 27 ~ exports.createPages= ~ paginas", paginas)

  const propiedades = result.data.allStrapiPropiedad.nodes
  // console.log("🚀 ~ file: gatsby-node.js ~ line 30 ~ exports.createPages= ~ propiedades", JSON.stringify(propiedades))

  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.titulo),
      component: require.resolve("./src/components/paginas.js"),
      context: {
        id: pagina.id
      }
    })
  })

  propiedades.forEach(propiedad => {
    // console.log("🚀 ~ file: gatsby-node.js ~ line 43 ~ exports.createPages= ~ propiedad", propiedad.id)
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve('./src/components/propiedades.js'),
      context: {
        id: propiedad.id
      }
    })
  })

}
