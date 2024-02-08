import React from "react";

// Types for our props
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd}>
      <input
        className="block p-1 border-2 border-solid border-black"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
      />

      <button
        type="submit"
        className="active:scale-[0.95] p-2 bg-black text-white"
      >
        Create
      </button>
    </form>
  );
};

export default InputField;
