import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-white rounded shadow w-full">
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between mb-2">
          <li className="text-lg">{todo.text}</li>
          <button
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;