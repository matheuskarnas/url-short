import styled from 'styled-components'
import bgImg from '../../images/bg-boost-desktop.svg'

export const Container = styled.div`
  display: flex;
  height: 250px;

  background: var(--Dark-Violet);
  background-image: url(${bgImg});

  background-repeat: no-repeat;

  div {
    margin: auto;
    text-align: center;

    h1 {
      color: white;
    }

    button {
      margin-top: 1rem;
      padding: 0.75rem 2rem;
      border-radius: 5rem;
      font-size: 1.25rem;
    }
  }
`
