import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
