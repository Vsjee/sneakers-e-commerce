import { Button } from '@/components';
import { ScrollToTop } from '@/utilities';
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
      <ScrollToTop />
      <article className="nav">
        <h4>Shipping address</h4>
        <h4>Payment & Shipping</h4>
        <h4>Comfirm payment</h4>
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
