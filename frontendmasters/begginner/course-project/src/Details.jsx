import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdoptedPetContext from './AdoptedPet';
import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

const Details = () => {
  const { id } = useParams();
  const result = useQuery({ queryKey: ['details', id], queryFn: fetchPet });
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <button onClick={() => setIsModalOpen(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {isModalOpen && (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button onClick={() => setIsModalOpen(false)}>No</button>
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate('/');
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
