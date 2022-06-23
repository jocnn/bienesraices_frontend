import * as React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav>
      <Link to={'/'}>Inicio</Link>
      <Link to={'/about'}>Nosotros</Link>
      <Link to={'/properties'}>Propiedades</Link>
    </nav>
  )
}

export default Navigation