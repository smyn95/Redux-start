import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from '../actions';
import { combineReducers } from 'redux';
// state
// ['코딩', '점심 먹기']
// [{text: '코딩', done: false}, {text: '점심먹기', done: false,}]
// {todos: [{text: '코딩', done: false}, {text: '점심먹기', done: false,}], filter: 'ALL'}

const initialState = { todos: [], filter: 'ALL' };
// [{text: '코딩', done: false}, {text: '점심먹기', done: false,}] previousState가 이런 형태이다
const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default reducer;

export function todosReducer(previousState = todosInitialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }
  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return previousState;
  // 어떠한 변화도 있지 않다면 previousState 리턴, action이 변경되도 previousState가 리턴될 것이다.
}

function filterReducer(previousState = filterInitialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }

  if (action.type === SHOW_ALL) {
    return 'ALL';
  }

  return previousState;
}
