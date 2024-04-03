import { useRef } from 'react';

const UseRef = () => {
  let ref = useRef(0);

  console.log('I am rendered!');

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return <button onClick={handleClick}>Click me!</button>;
};

export default UseRef;
