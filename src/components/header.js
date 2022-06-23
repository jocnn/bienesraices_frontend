import * as React from "react"
import { Link } from "gatsby"

import Navigation from "./navigation"

const Header = () => {
  return (
    <header>
      <div>
        <Link to={'/'}>Bienes Raíces</Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header