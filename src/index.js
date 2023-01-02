import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addToDo, completeToDo, showAll, showComplete } from './redux/actions';

store.subscribe(() => {});

store.dispatch(addToDo('할일'));
store.dispatch(completeToDo(0));
store.dispatch(showComplete());
store.dispatch(showAll());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
