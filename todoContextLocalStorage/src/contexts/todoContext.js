import { useContext,createContext } from "react";

const todoContext = createContext({
    todos:[
        {
            id:1,
            todo:"msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{todo},
    toggleComplete:(id)=>{id},
    deleteTodo:(id)=>{id},
    updateTodo:(id)=>{id}
})

export const TodoProvider = todoContext.Provider;

export default function useTodo(){
    return useContext(todoContext);
}