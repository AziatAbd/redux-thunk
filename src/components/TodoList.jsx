import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { requestEditTodos } from "../store/actons/action";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((s) => s.todo);

  const changeCheckbox = (id) => {
    const data = todos.find((item) => item.id === id);

    dispatch(requestEditTodos(data));
    console.log(data);
  };

  return (
    <div>
      {todos.map((item) => (
        <TodoItem {...item} key={item.id} changeCheckbox={changeCheckbox}  />
      ))}
    </div>
  );
};

export default TodoList;
