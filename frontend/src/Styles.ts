import styled from '@emotion/styled';

export const PrimaryButton = styled.button`
  background-color: blue;
  border-color: yellow;
  border-style: solid;
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: indigo;
  }
  :focus {
    outline-color: red;
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
