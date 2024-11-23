# Data caching pattern

Data caching is a useful pattern to improve the performance and user experience of your application by storing frequently accessed data locally. In this documentation, we will explain a data caching pattern implemented using React hooks, particularly `useState` and `useEffect`.

## Example: Caching Breed List for Animals

In this example, we will create a custom hook useBreedList that fetches a list of breeds based on the animal type provided. This hook will cache the data to avoid redundant network requests for the same animal type.

### Code Implementation

Here is the complete code for the `useBreedList` hook:

```jsx
import { useState, useEffect } from 'react';

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus('loading');

      const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal]);

  return [breedList, status];
}
```

### Explanation

1. **Import Hooks:** We import `useState` and `useEffect` from React to manage state and side effects within our custom hook.

2. **Local Cache:** We create a `localCache` object outside of the hook to store the breed lists. This cache persists across re-renders of the component using the hook.

3. **Custom Hook `useBreedList`:**
    - Parameters: The hook takes one parameter, animal, which specifies the type of animal for which to fetch the breed list.
    - State variable:
      - `breedList`:  Stores the list of breeds for the given animal.
      - `status`: Represents the current status of the data fetching process (e.g., unloaded, loading, loaded).

4. **useEffect:** This hook runs whenever the `animal` parameter changes.
    - Empty Animal Check: If no animal is provided, it resets the breedList to an empty array.
    - Cache Check: If the localCache already contains data for the given animal, it sets the breedList from the cache.
    - Fetch Data: If the data is not in the cache, it calls the requestBreedList function to fetch the data from the API.

5. **requestBreedList Function:**
    - Resets the breedList and sets the status to loading.
    - Fetches data from the API.
    - Updates the localCache with the fetched data.
    - Sets the breedList from the cache and updates the status to loaded.

6. **Return value:** The hook returns an array containing the breedList and status.

### Usage

To use this custom hook in a component, you can do the following:

```js
import React from 'react';
import useBreedList from './useBreedList';

function BreedSelector({ animal }) {
  const [breedList, status] = useBreedList(animal);

  return (
    <div>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <select>
          {breedList.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default BreedSelector;
```

In this example, the BreedSelector component uses the useBreedList hook to fetch and display a list of breeds for the selected animal. The component displays a loading message while the data is being fetched and renders a dropdown list of breeds once the data is available.
