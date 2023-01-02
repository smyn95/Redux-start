import { legacy_createStore } from 'redux';
import toDoApp from './reducers/reducer';

const store = legacy_createStore(toDoApp);

export default store;
