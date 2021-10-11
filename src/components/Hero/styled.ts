import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 5rem auto 0 auto;

  @media (max-width: 1480px) {    
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    margin-top: 0;

    div:nth-child(1){
      margin-top: 3rem;
    }
  }

  h1 {
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 5.5rem;
  }

  h2 {
    color: var(--Grayish-Violet);
    font-size: 1.25rem;
  }

  button {
    padding: 1rem 2.25rem;
    margin-top: 2.25rem;
    border-radius: 55555rem;
    font-size: 1.25rem;
  }
`;
