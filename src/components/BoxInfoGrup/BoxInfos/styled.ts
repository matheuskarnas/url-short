import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem 2rem 1rem;
  background: white;
  min-width: 300px;

  div {
    background: var(--Dark-Violet);
    height: 5.5rem;
    width: 5.5rem;
    display: flex;
    border-radius: 5rem;
    margin-top: -2.25rem;

    img {
      height: 40px;
      margin: auto;
    }
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    line-height: 3rem;
  }

  p {
    color: var(--Gray);
  }

  @media (max-width: 1200px) {
    max-width: 600px;
    margin: auto;
    text-align: center;
    div{
      transform: translateY(-2.75rem);
      margin: auto;
      padding: 1rem;
    }
  }
`;
