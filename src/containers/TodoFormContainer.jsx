import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addToDo } from "../redux/actions";

const TodoFormContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    add: (text) => {
      dispatch(addToDo(text));
    },
  })
)(TodoForm);

export default TodoFormContainer;
