import { ADD_TODO, COMPLETE_TODO } from '../actions';

const initialState = [];

export default function todos(previousState = initialState, action) {
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
