import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, index, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [date] = useState(new Date().toLocaleDateString());
  const [removing, setRemoving] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(index, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    setRemoving(true);
    setTimeout(() => {
      deleteTodo(index);
    }, 500); // 애니메이션 시간과 일치시킴
  };

  return (
    <div
      className={`TodoItem ${todo.completed ? "completed" : ""} ${
        removing ? "removing" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      <div className="content">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>
      <div className="right-section">
        <span className="date">{date}</span>
        <div className="buttons">
          <button onClick={handleEdit}>{isEditing ? "저장" : "수정"}</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
