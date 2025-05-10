import React, { useState } from 'react';
import '../index.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>

<hr></hr>


      <div className="task-section">
        <h2>Todo</h2>
        <ul className="todo-list">
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <li key={todo.id}>
                <div className="todo-content">
                  <div className="todo-header">
                    <div className="todo-title">{todo.title}</div>
                    <div className="todo-actions">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                      />
                      <button onClick={() => deleteTodo(todo.id)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="todo-description">{todo.description}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>


<hr></hr>


      <div className="task-section">
        <h2>Completed Tasks</h2>
        <ul className="completed-list">
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <li key={todo.id}>
                <div className="todo-content">
                  <div className="todo-header">
                    <div className="todo-title">{todo.title}</div>
                    <div className="todo-actions">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                      />
                      <button onClick={() => deleteTodo(todo.id)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="todo-description">{todo.description}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
