import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  
`;

export const Content = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media(max-width: 1200px){
    padding-top: 3rem;
    display: block;
  } 

  div.boxInfo:nth-child(1) {
    margin-bottom: 4.5rem;
  }

  div.boxInfo:nth-child(2) {
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
  }

  div.boxInfo:nth-child(3) {
    margin-top: 4.5rem;
  }
`;
