import { Provider } from 'react-redux';
import AppWrapper from './app.style';
import { Footer, NavBar } from './components';
import myStore from './redux/store';

function App() {
  return (
    <Provider store={myStore}>
      <AppWrapper>
        <NavBar />
        <Footer />
      </AppWrapper>
    </Provider>
  );
}

export default App;
