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
  height: ${props => `${props.height}rem`};
`;

const renderLetters = (height, paths) => {
  return Object.keys(paths).map(key => {
    return (
      <li key={key}>
        <StyledImage
          alt={`Majuscule "${key.toUpperCase()}" and miniscule "${key}" in Spencerian Script`}
          height={height}
          src={paths[key]}
        />
      </li>
    );
  });
};

const Letters = ({ height, letterPaths }) => {
  return <StyledUL>{renderLetters(height, letterPaths)}</StyledUL>;
};

export default Letters;
