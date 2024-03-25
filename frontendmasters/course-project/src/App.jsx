import React from 'react';
import { ReactDOM } from 'react-dom';

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
    React.createElement(Pet, { name: 'Luna', type: 'Dog', breed: 'Havanese' }),
    React.createElement(Pet, { name: 'Poddy', type: 'Dog', breed: 'Havanese' }),
    React.createElement(Pet, { name: 'Quincy', type: 'Dog', breed: 'Havanese' }),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
