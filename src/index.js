import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import movies from './reducers';
import App from './component/App';


// create store
const store = createStore(movies);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>
);

