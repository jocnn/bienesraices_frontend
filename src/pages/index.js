import * as React from "react"
import useIndex from "../hooks/useIndex"

import Layout from "../components/layout"

const Index = () => {

  const index = useIndex()

  console.log(index)

  return (
    <Layout>
      <h1>Index</h1>
    </Layout>
  )
}

export default Index