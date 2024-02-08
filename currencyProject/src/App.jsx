import { useState } from 'react'
import useInfo from './hooks/useInfo';
import InputBox from './components/InputBox';

function App() {

  const [currency,setCurrency] = useState(0);
  const [From,setFrom] = useState('USD');
  const [To,setTo] = useState('INR');
  const [Options,setOptions] = useState([]);

  return (
    <>
      <div className="flex justify-center items-center bg-black h-screen w-full">
        <div className="flex flex-col justify-center items-start bg-fuchsia-500 w-[60%] h-[40%] gap-3 px-3">
            <InputBox label="From"/>
            <InputBox label="To"/>
            <button className='bg-transparent border border-b p-2'>INR to USD</button>
        </div>
      </div>
    </>
  )
}

export default App
