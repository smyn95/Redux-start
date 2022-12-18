import { legacy_createStore } from 'redux';
import { toDoApp } from './reducers';

const store = legacy_createStore(toDoApp);

export default store;
