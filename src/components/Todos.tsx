import React from "react";
import { Todo } from "../Model";
import { SingleTodo } from ".";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <ul className="space-y-2">
      {todos?.map((todo, index) => {
        return (
          <SingleTodo
            key={index}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
