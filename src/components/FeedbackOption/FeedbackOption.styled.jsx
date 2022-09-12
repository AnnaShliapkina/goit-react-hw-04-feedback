import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  width: 100px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #f3f336;
  font-size: 1.5;
  text-transform: capitalize;
  color: black;
  cursor: pointer;
  :hover,
  :focus {
    border-color: blue;

    font-weight: 600;
  }
`;
