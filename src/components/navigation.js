import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-family: var(--fuentePrimaria);
  padding: .5rem;
  text-decoration: none;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
  &.pagina-actual {

    border-bottom: 2px solid #fff;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <NavLink
        to={'/'}
        activeClassName='pagina-actual'
      >Inicio</NavLink>
      <NavLink
        to={'/about'}
        activeClassName='pagina-actual'
      >Nosotros</NavLink>
      <NavLink
        to={'/properties'}
        activeClassName='pagina-actual'
      >Propiedades</NavLink>
    </Nav>
  )
}

export default Navigation