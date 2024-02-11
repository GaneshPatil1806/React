import { useState } from "react";
import useTodo from "../contexts/todoContext";

export default function TodoForm(){

    const {addTodo} = useTodo();
    const [todo,setTodo] = useState('');
    
    function submitTodo(e){
        e.preventDefault();
        addTodo({todo,completed:false});
        setTodo('');
    }
    
    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                onClick={submitTodo}
            >
                Add
            </button>
        </form>
    );
}