import { useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { requestGetTodos, requestPostData } from "../store/actons/action";
import { useEffect } from "react";

const Wrapper = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(requestPostData(data));
  };

  useEffect(() => {
    dispatch(requestGetTodos());
  }, []);
  return (
    <div>
      <TodoForm onSubmit={onSubmit} />
      <TodoList />
    </div>
  );
};

export default Wrapper;
