import Home from './pages/Home';
import { UseEffect, UseRef } from './pages/hooks';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/other';

function App() {
  return (
    <main className="w-screen h-screen p-6 | bg-red-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
