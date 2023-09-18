import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 1rem auto 0 auto;
  padding: 1.25rem 2rem;
  align-items: center;
  background: white;
  max-width: 1440px;
  border-radius: 0.5rem;

  div.shortLink {
    margin-left: auto;
    display: flex;
    a {
      color: var(--Cyan);
      text-decoration: none;
    }

    button {
      font-size: 1rem;
      margin-left: 2rem;
      padding: 0.25rem 1rem;
      border-radius: 0.5rem;
    }
  }
  @media (max-width: 850px) {
    display: block;
    padding: 1rem 0;

    div.link {
      border-bottom: 1px solid var(--Gray);
      padding: 1rem;
    }
    div.shortLink {
      flex-direction: column;
      padding: 1rem;
      a {
        padding-bottom: 1rem;
      }

      button {
        margin-left: 0;
        padding: 0.75rem 0;
      }
    }
  }
`
