import { ADD_TODO } from './actions';
// state
// ['코딩', '점심 먹기']

export function toDoApp(previousState = [], action) {
  // 초기값을 설정 해주는 부분

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
  // 어떠한 변화도 있지 않다면 previousState 리턴, action이 변경되도 previousState가 리턴될 것이다.
}
