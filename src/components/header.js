import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import Navigation from "./navigation"

const Header = () => {
  return (
    <header
      css={css`
        background-color: #0D2838;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to={'/'}>Bienes Raíces</Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header