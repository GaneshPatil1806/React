import AddTodo from "./components/AddTodo/";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="font-sans text-center">
      <h1 className="text-2xl mb-4">Todo App</h1>
      <div className="flex flex-col">
        <AddTodo className="mb-4" />
        <Todos />
      </div>
    </div>
  );
}

export default App;
