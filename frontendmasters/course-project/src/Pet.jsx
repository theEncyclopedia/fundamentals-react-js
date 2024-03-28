/* eslint-disable no-unused-vars */
import React from 'react';

// Old React version of creating component
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
const PetLegacyJSX = (props) => {
  const { name, type, breed } = props;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal}, ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
