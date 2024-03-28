import React from 'react';
import Pet from './Pet';

const Result = (props) => {
  const { pets } = props;
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Not fount</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city} ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Result;
