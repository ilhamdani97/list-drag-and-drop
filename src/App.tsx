import React from 'react';
import EventPage from './pages/EventPage';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <EventPage/>
      </PersistGate>
    </Provider>
);
}

export default App;
