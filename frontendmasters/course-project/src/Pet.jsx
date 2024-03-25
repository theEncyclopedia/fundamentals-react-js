import React from 'react';

// Old React version of creating component
// eslint-disable-next-line no-unused-vars
const PetLegacy = (props) => {
  const { name, type, breed } = props;

  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, type),
    React.createElement('h2', {}, breed),
  ]);
};

/**
 *  JSX variant of the react component
 */
const Pet = (props) => {
  const { name, type, breed } = props;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

export default Pet;
