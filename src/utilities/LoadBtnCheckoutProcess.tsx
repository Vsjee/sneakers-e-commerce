import { Button } from '@/components';
import { Link } from 'react-router-dom';

interface Props {
  route: string;
}

function LoadBtnCheckoutProcess({ route }: Props) {
  return (
    <Link to={`${route}`}>
      <Button buttonType="primary">Continue</Button>
    </Link>
  );
}

export default LoadBtnCheckoutProcess;
