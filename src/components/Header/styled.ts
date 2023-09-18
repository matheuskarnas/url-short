import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  width: 100%;
  margin: auto;
  height: 6rem;
  padding: 1.5rem 0;

  div {
    display: flex;
    line-height: 2rem;

    a {
      font-size: 1rem;
      padding-left: 1.5rem;
      color: var(--Grayish-Violet);
      cursor: pointer;
      :hover {
        color: var(--Very-Dark-Violet);
      }
    }
    @media (max-width: 1000px) {
      a,
      button {
        display: none;
      }
    }
  }

  div.buttons {
    margin-left: auto;

    button {
      padding: 0.5rem 1.5rem;
      border-radius: 999rem;
      font-size: 1rem;
      margin-left: 2rem;
      :first-child {
        border: 0;
        background: white;
        color: var(--Grayish-Violet);
      }
    }
  }

  div.menu {
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media (min-width: 1001px) {
      display: none;
    }
  }
`
