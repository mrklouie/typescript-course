import React, { useState } from "react";
import { InputField, Todos } from "./components";
import { Todo } from "./Model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // The todo type is on the Model.ts file

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);

      setTodo("");
    }

    console.log(todos);
  };

  return (
    <div className="mx-auto w-[90%] max-w-7xl">
      <h1>Taskify</h1>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} />

      <div className="mt-2 border-2 border-solid border-black">
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
