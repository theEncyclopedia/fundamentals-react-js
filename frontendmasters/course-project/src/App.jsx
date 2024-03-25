import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="Luna" type="Dog" breed="Husky" />
      <Pet name="Luna" type="Dog" breed="Husky" />
      <Pet name="Luna" type="Dog" breed="Husky" />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
