import React, { useContext, useState } from 'react';
import useBreedList from './useBreedList';
import Result from './Result';
import { useQuery } from '@tanstack/react-query';
import fetchSearch from './fetchSearch';
import AdoptedPetContext from './AdoptedPet';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: '',
    location: '',
    breed: '',
  });

  const [adoptedPet, _] = useContext(AdoptedPetContext);
  const [animal, setAnimal] = useState('');
  const [breedList] = useBreedList(animal);

  const result = useQuery({ queryKey: ['search', requestParams], queryFn: fetchSearch });
  const pets = result?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);

          const obj = {
            animal: formData.get('animal'),
            breed: formData.get('breed'),
            location: formData.get('location'),
          };
          setRequestParams(obj);
        }}
      >
        {
          adoptedPet ? (
            <div className="pet image-container">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            </div>
          ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
        }
        <label htmlFor="location">
          Location
          <input id="location" name="location" type="text" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={() => {}}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed" disabled={breedList.length === 0}>
            <option />
            {breedList.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
