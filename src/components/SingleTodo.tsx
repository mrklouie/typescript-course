import React from "react";
import { Todo } from "../Model";

interface Prop {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Prop> = ({ todos, todo, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="flex justify-between p-2 bg-orange-500">
      <span className="text-white">
        {todo.isDone ? todo.todo + " (Completed)" : todo.todo}
      </span>
      <div className="space-x-3">
        <span className="text-white cursor-pointer">edit</span>
        <span
          className="text-white cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        >
          delete
        </span>
        <span
          className="text-white cursor-pointer"
          onClick={() => handleDone(todo.id)}
        >
          save
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
