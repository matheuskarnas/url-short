import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const Top = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    padding: 0 2rem;
  }
`

export const Medium = styled.div`
  margin: auto;
  background: #edf2f7;
  padding: 0 10rem;

  @media (max-width: 1200px) {
    padding: 0 2rem;
  }
`

export const Bottom = styled.div`
  width: 100vw;
  background: #edf2f7;
`
