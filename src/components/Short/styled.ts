import styled from "styled-components";
import bgImg from "../../images/bg-shorten-desktop.svg";

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 9rem auto 0 auto;
  background: var(--Dark-Violet);
  background-image: url(${bgImg});
  border-radius: 0.5rem;
  padding: 2.5rem 3.5rem;
  align-items: center;
  position: relative;
  top: -4rem;

  input {
    height: 3rem;
    width: 100%;
    border: 0;
    padding-left: 1.5rem;
    border-radius: 0.5rem;

    ::placeholder {
      color: var(--Gray);
    }
  }

  button {
    height: 3rem;
    margin-left: 1rem;
    width: 10rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 850px) {
    display: block;
    padding: 1rem 1.5rem;

    input {
      margin-top: 1rem;      
    }

    button {
      width: 100%;
      margin: 1rem 0;
      font-size: 1.125rem;
    }
  }
`;

export const Results = styled.div`
  margin-top: -3.5rem;
`;
