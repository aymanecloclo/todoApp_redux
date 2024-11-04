// App.js
import React from 'react';
import AddTodo from './components.jsx/AddTodo';
import TodoList from './components.jsx/TodoList';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To-Do List avec Redux</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;