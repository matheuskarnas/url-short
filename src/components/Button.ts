import styled from "styled-components";

export const ButtonCyan = styled.button`
  cursor: pointer;
  background: var(--Cyan);
  color: white;
  border: 0;
  font-weight: bold;

  :hover {
    background: hsl(181, 69%, 85%);
    transition: 500ms;
  }
`;
