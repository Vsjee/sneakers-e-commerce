import { useState } from 'react';

const useCuantitySelector = () => {
  const [cuantity, setCuantity] = useState(0);

  const increment = () => setCuantity(() => cuantity + 1);
  const decrement = () => setCuantity(() => (cuantity > 0 ? cuantity - 1 : 0));

  return {
    cuantity,
    increment,
    decrement,
  };
};

export default useCuantitySelector;
