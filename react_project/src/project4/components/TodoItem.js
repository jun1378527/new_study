import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, index, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(index, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`TodoItem ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? "저장" : "수정"}</button>
      <button onClick={() => deleteTodo(index)}>삭제</button>
    </div>
  );
};

export default TodoItem;
