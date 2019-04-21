import React from 'react';
import styled from 'styled-components';
import letterPaths from '../importLetters';
import Letters from './Letters';

const StyledDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const App = () => (
  <StyledDiv className="App">
    <Letters letterPaths={letterPaths} />
  </StyledDiv>
);

export default App;
