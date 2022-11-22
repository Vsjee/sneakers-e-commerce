import { Button } from '@/components';
import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import NestedCheckoutNavWrapper from './NestedCheckoutNavWrapper.css';

function NestedCheckoutNav() {
  const { pathname } = useLocation();
  const [path, setPath] = useState(false);

  function defineCurrentPath() {
    if (pathname === '/checkout/menu') return setPath((prev) => (prev = false));
    return setPath((prev) => (prev = true));
  }

  useEffect(() => {
    defineCurrentPath();
  }, [pathname]);

  return (
    <NestedCheckoutNavWrapper>
      <article className="nav">
        <Link to={'address'}>
          <h4>Shipping address</h4>
        </Link>
        <Link to={'payment&Shipping'}>
          <h4>Payment & Shipping</h4>
        </Link>
        <Link to={'confirm'}>
          <h4>Comfirm payment</h4>
        </Link>
      </article>
      <article className="outlet">
        {path === true ? null : (
          <article className="pucharse">
            <h1>Ready for your purchase</h1>
            <Link to={'address'}>
              <Button buttonType="primary" className="form__submit">
                Click to continue
              </Button>
            </Link>
          </article>
        )}
        <Outlet />
      </article>
    </NestedCheckoutNavWrapper>
  );
}
export default NestedCheckoutNav;
