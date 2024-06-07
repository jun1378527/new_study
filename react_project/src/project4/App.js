import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);

    // 검색어가 공백일 때 필터링된 목록도 업데이트
    if (searchTerm.trim() === "") {
      setFilteredTodos(newTodos);
    }
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);

    // 검색어가 공백일 때 필터링된 목록도 업데이트
    if (searchTerm.trim() === "") {
      setFilteredTodos(newTodos);
    }
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    // 검색어가 공백일 때 필터링된 목록도 업데이트
    if (searchTerm.trim() === "") {
      setFilteredTodos(newTodos);
    }
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);

    // 검색어가 공백일 때 필터링된 목록도 업데이트
    if (searchTerm.trim() === "") {
      setFilteredTodos(newTodos);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(
        todos.filter(todo =>
          todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor addTodo={addTodo} />
      <TodoList
        todos={filteredTodos.length > 0 ? filteredTodos : todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
