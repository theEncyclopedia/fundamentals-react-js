import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import SearchParams from './SearchParams';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './Details';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt me</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
