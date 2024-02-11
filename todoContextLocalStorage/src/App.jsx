import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts/todoContext"
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {  

  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    const storedTodo = sessionStorage.getItem('todos');
    if(storedTodo && storedTodo.length>0){
      setTodos(JSON.parse(storedTodo));
    }
  },[])

  useEffect(()=>{
      sessionStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  function addTodo(todo){
      setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  function toggleComplete(id){
    
    setTodos((prev) => (
        prev.map((todo)=> (
        todo.id === id ? {...todo, completed : !todo.completed} : todo
      ))
    ))
  }

  function updateTodo(id,newTodo){
      setTodos((prev)=>(
        prev.map((todo)=>(
            todo.id === id ? newTodo : todo
        ))
      ))
  }

  function deleteTodo(id){
      setTodos((prev)=>(
        prev.filter((todo)=>(
          todo.id !== id
        ))
      ))
  }

  return (
    <TodoProvider value={{todos,addTodo,toggleComplete,deleteTodo,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {<TodoForm/>} 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {todos.map((todo)=>(
                    <TodoItem key={todo.id} todo={todo}/>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
