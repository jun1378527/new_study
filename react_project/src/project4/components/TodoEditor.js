import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="새로운 Todo..."
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoEditor;
