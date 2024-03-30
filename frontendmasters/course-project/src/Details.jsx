import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';
import Carousel from './Carousel';

const Details = () => {
  const { id } = useParams();
  const result = useQuery({ queryKey: ['details', id], queryFn: fetchPet });

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = result.data.pets[0] || {};

  return (
    <div className="details">
      <div>
        <Carousel images={pet.images} />
        <h1>{pet.name}</h1>
        <h2>{`${pet.name} - ${pet.breed} - ${pet.city} - ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};
export default Details;
