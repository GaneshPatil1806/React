import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'

export default function AddTodo() {

  const [input, setInput] = useState();
  const dispach = useDispatch();

  function addTodoHandler(e) {
      e.preventDefault();
     // console.log('here is input',input);
      dispach(addTodo(input))
      setInput('');
  }

  return (
    <div className='flex justify-center p-10'>
      <form onSubmit={addTodoHandler} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-96 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e)=>setInput(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
    </div>
  )
}
