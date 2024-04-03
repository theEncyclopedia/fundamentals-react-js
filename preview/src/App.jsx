import { UseRef } from './pages/hooks';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main className="w-screen h-screen p-6 | bg-red-50">
      <div>
        <Link to="/home">Hello</Link>
      </div>
    </main>
  );
}

export default App;
