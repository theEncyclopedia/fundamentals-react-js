# React data fetching and caching pattern

`useDataList` is a custom React hook designed to fetch and cache data based on a set of keys. It simplifies the process of data fetching in functional components by managing the state for data, status, and errors, while also reducing redundant API calls through local caching.

## Code Example

```jsx
import { useState, useEffect } from 'react';

const localCache = {};

export default function useDataList(keys) {
  const [dataList, setDataList] = useState([]);
  const [status, setStatus] = useState('unloaded');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function requestDataList() {
      try {
        setDataList([]);
        setStatus('loading');
        const res = await fetch(`https://example.api.com${keys}`);
        const json = await res.json();
        localCache[keys] = json.breeds || [];
        setDataList(localCache[keys]);
        setStatus('loaded');
      } catch (error) {
        setError(error);
        setStatus('error');
      }
    }

    if (!keys) {
      setDataList([]);
      setStatus('unloaded');
    } else if (localCache[keys]) {
      setDataList(localCache[keys]);
      setStatus('loaded');
    } else {
      requestDataList();
    }
  }, [keys]);

  return [dataList, status, error];
}
```

## Key Features

This hook provides a structured and reusable way to manage data fetching in React components. By handling states like loading, error, and data caching internally, it reduces the complexity of managing these states manually.

1. **State Management**: Handles `dataList`, `status`, and `error` states automatically.
2. **Local Caching**: Avoids redundant network requests by storing data locally in `localCache`.
3. **Asynchronous Data Fetching**: Supports fetching data from APIs and manages loading/error states seamlessly.
4. **Flexibility**: Can be used with any API endpoint that is dependent on dynamic keys.

### Pros

1. **Simplifies Code**: Reduces boilerplate by encapsulating common fetch logic in a reusable hook.
2. **Performance Optimization**: Local caching improves performance by minimizing unnecessary API calls.
3. **Error Handling**: Provides built-in error state management for robust applications.
4. **Reusability**: Can be reused across multiple components needing similar data fetching logic.
5. **Declarative Approach**: Automatically re-fetches data when the `keys` change.

### Cons

1. **Limited Scope**: Designed for simple data fetching. For complex scenarios like pagination or infinite scrolling, additional customization is needed.
2. **Memory Usage**: Caching may increase memory usage, especially with large datasets.
3. **Single Responsibility**: Assumes responsibility for both fetching and caching, which might not fit all use cases.
4. **Tight Coupling to `keys`**: Any issues with the `keys` parameter (e.g., incorrect format or dependency mismatch) can lead to bugs.

## Usage Example

```jsx
import useDataList from './useDataList';

function BreedList({ keys }) {
  const [dataList, status, error] = useDataList(keys);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;

  return (
    <ul>
      {dataList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

## Conclusion

`useDataList` is a powerful and convenient custom hook for managing data fetching in React applications. It abstracts away repetitive tasks like state management, caching, and error handling, allowing developers to focus on rendering logic. However, for more complex scenarios, additional modifications may be necessary to meet specific requirements.
