import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

function AddTodo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
  
    const handleAddTodo = () => {
      if (text.trim()) {
        dispatch(addTodo(text));
        setText('');
      }
    };
  
    return (
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ajouter une tâche"
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Ajouter
        </button>
      </div>
    );
  }
  
  export default AddTodo;