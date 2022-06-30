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
    }
  `)
  // console.log("🚀 ~ file: gatsby-node.js ~ line 20 ~ exports.createPages= ~ result", JSON.stringify(result))

  if (result.error) {
    reporter.panic("No hubo resultados", result.error)
  }

  const propiedades = result.data.allStrapiPropiedad.nodes
  // console.log("🚀 ~ file: gatsby-node.js ~ line 27 ~ exports.createPages= ~ propiedades", JSON.stringify(propiedades))

  propiedades.forEach(propiedad => {
    // console.log("🚀 ~ file: gatsby-node.js ~ line 30 ~ exports.createPages= ~ propiedad", propiedad.id)
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve('./src/components/properties.js'),
      context: {
        id: propiedad.id
      }
    })
  })

}
