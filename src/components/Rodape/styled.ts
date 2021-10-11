import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: var(--Very-Dark-Violet);
  padding: 3rem 10rem 0 10rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  display: flex;
  @media (max-width: 1100px) {
    display: block;
    padding-bottom: 2.5rem;
    text-align: center;
  }
`;

export const Logo = styled.div``;

export const Links = styled.div`
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  @media (max-width: 1100px) {
    display: block;
    div {
      padding-bottom: 2rem;
      :first-child{
        padding-top: 2rem;
      }
    }
  }

  div {
    p {
      color: white;
    }

    a {
      color: var(--Gray);
      font-size: 0.75rem;
      line-height: 1.75rem;

      :hover {
        color: var(--Cyan);
      }
    }
  }
`;

export const Social = styled.div`
  margin-left: 5rem;
  svg {
    margin-left: 1.25rem;

    :hover path {
      fill: var(--Cyan);
    }
  }

  @media(max-width: 1100px){
    padding: 0 auto;
    margin: 0;
  }
`;
