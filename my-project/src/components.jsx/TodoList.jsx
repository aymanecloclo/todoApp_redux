// TodoList.js
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Liste des Tâches</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1"
          >
            <span className="text-gray-700">{todo.text}</span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
