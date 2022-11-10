import { lazy, Suspense } from 'react';
import AppWrapper from './app.style';
import { Footer, NavBar } from './components';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from './redux/store';
import { RoutesWithNotFound } from './utilities';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const Products = lazy(() => import('./pages/products/Products'));
const SneakerProduct = lazy(() => import('./pages/sneakerProduct/SneakerProduct'));
const About = lazy(() => import('./pages/about/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const persistor = persistStore(myStore);

function App() {
  return (
    <>
      <Provider store={myStore}>
        <PersistGate persistor={persistor}>
          <AppWrapper>
            <NavBar />
            <Suspense fallback="Loading...">
              <RoutesWithNotFound>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<SneakerProduct />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
              </RoutesWithNotFound>
            </Suspense>
            <Footer />
          </AppWrapper>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
