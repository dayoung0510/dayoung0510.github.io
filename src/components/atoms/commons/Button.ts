import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  :disabled {
    background-color: #bcbcbc;
    color: #fff;
  }
`;

export default Button;
