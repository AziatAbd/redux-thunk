import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const newValue = {
      title: value,
      isCompleted: false,
    };
    onSubmit(newValue);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="ToDo text"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
