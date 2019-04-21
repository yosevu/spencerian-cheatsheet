import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import letterPaths from '../importLetters';
import Letters from './Letters';

const AppContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`;

const useHeight = initialValue => {
  const [ height, setHeight ] = useState(initialValue);
  const setHeightMemo = useCallback(height => {
    if (height < 5) {
      return setHeight(5);
    }

    if (height > 30) {
      return setHeight(30);
    }

    return setHeight(height)
  });

  return [ height, setHeightMemo ];
};

const App = () => {
  const [ height, setHeight ] = useHeight(10);

  return (
    <AppContainer className="App">
      <ControlsContainer>
        <button onClick={() => setHeight(height + 1)}>+</button>
        <button onClick={() => setHeight(10)}>Reset</button>
        <button onClick={() => setHeight(height - 1)}>-</button>
      </ControlsContainer>
      <Letters height={height} letterPaths={letterPaths} />
    </AppContainer>
  );
};

export default App;
