import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';
import SearchParams from './SearchParams';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailsErrorBoundary from './Details';
import AdoptedPetContext from './AdoptPetContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt me</Link>
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<DetailsErrorBoundary />} />
            </Routes>
          </BrowserRouter>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
