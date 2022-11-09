import { useState } from 'react';

const useCuantitySelector = () => {
  const [cuantity, setCuantity] = useState(1);

  const increment = () => setCuantity(() => cuantity + 1);
  const decrement = () => setCuantity(() => (cuantity > 1 ? cuantity - 1 : 1));

  return {
    cuantity,
    increment,
    decrement,
  };
};

export default useCuantitySelector;
