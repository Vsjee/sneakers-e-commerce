import useCuantitySelector from '@/hooks/useCuantitySelector';
import CuantityWrapper from './CuantityWrapper.css';

function Cuantity() {
  const { cuantity, increment, decrement } = useCuantitySelector();

  return (
    <CuantityWrapper>
      <button className="btn" onClick={decrement}>
        -
      </button>
      <input className="label" type="text" maxLength={2} value={cuantity} />
      <button className="btn" onClick={increment}>
        +
      </button>
    </CuantityWrapper>
  );
}

export default Cuantity;
