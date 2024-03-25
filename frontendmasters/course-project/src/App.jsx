import React from 'react';
import { createRoot } from 'react-dom/client';

const Pet = (props) => {
  const { name, type, breed } = props;

  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, type),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  // createElement(elementType, attributeObject, children )
  return React.createElement('div', { id: 'div-id', className: '' }, [
    React.createElement('h1', {}, 'Adopt me'),
    React.createElement(Pet, { name: 'Luna', type: 'Dog', breed: 'Havanas', key: '1' }),
    React.createElement(Pet, { name: 'Poddy', type: 'Dog', breed: 'Golden Retriever', key: '2' }),
    React.createElement(Pet, { name: 'Quincy', type: 'Dog', breed: 'Labrador Retriever', key: '3' }),
  ]);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
