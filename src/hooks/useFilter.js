import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

const Formulario = styled.form`
  width: 95%;
  display: flex;
  border: 1px solid #E1E1E1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: var(--fuentePrincipal);
`

const useFilter = () => {

  const result = useStaticQuery(graphql`
    query {
      allStrapiCategoria {
        nodes {
          id
          nombre
        }
      }
    }
  `)
  // console.log("🚀 ~ file: useFilter.js ~ line 16 ~ useFilter ~ result", result)
  
  const categorias = result.allStrapiCategoria.nodes
  // console.log("🚀 ~ file: useFilter.js ~ line 19 ~ useFilter ~ categorias", categorias)

  const FilterUI = () => (
    <Formulario>
      <Select>
        <option>-- Filtrar --</option>
        {
          categorias.map(opcion => (
            <option
              key={opcion.id}
              option={opcion.nombre}
            >{opcion.nombre}</option>
          ))
        }
      </Select>
    </Formulario>
  )
  
  return {
    FilterUI
  }
}

export default useFilter
