import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addToDo } from "../redux/actions";

export default function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = useCallback(
    (text) => {
      dispatch(addToDo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
}
