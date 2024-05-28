import { useDispatch } from "react-redux";
import { requestDeleteTodos } from "../store/actons/action";

const TodoItem = ({ id, title, isCompleted, changeCheckbox }) => {
  const dispatch = useDispatch();
  function deleteTodo() {
    dispatch(requestDeleteTodos(id));
  }
  return (
    <div>
      <p>{title}</p>
      <button onClick={deleteTodo}>delete</button>
      <input
        onChange={() => changeCheckbox(id)}
        checked={isCompleted}
        type="checkbox"
      />
    </div>
  );
};

export default TodoItem;
