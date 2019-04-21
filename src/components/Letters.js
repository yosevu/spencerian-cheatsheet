import React from 'react';
import styled from 'styled-components';

const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const StyledImage = styled.img`
  height: 10rem;
`;

const renderLetters = paths => {
  return paths.map(path => {
    return (
      <li>
        <StyledImage
          alt="Spencerian script majuscule and miniscule A"
          src={path}
        />
      </li>
    );
  });
};

const Letters = ({ letterPaths }) => {
  return (
    <StyledUL>
      {renderLetters(letterPaths)}
    </StyledUL>
  );
};

export default Letters;
