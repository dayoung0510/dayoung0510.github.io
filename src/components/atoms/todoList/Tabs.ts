import styled from 'styled-components';

export const ButtonBar = styled.div`
  height: 3rem;
  background-color: red;
  display: flex;
  align-items: flex-end;
`;

export const TabButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export const TabPanel = styled.div`
  background-color: #fff;
  padding: 1rem;
  height: calc(100% - 3rem);
`;
