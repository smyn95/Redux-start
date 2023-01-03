import { useRef } from 'react';
import useReduxDispatch from '../hooks/useReduxDispatch';
import { addToDo } from '../redux/actions';

export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    dispatch(addToDo(inputRef.current.value));
  }
}
