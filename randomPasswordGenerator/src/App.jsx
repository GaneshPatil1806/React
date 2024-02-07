import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const passwordRef = useRef(null);

  const [allowNum, setallowNum] = useState(false);
  const [alloChar, setallowChar] = useState(false);
  const [Password, setPassword] = useState("");
  const [Len, setLen] = useState(0);

  const handleLen = (e) => {
    setLen(parseInt(e.target.value))
  } 

  const handleCopy = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(Password);
  } 

  const generatePass = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (alloChar) str += "!@#$%^&*-_+=[]{}~`"
   
    if (allowNum) str += '0123456789'
    
    let pass = ""

    for (let i = 0; i < Len; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);

  }, [allowNum, alloChar, Len]);

  useEffect(() => {
    generatePass();
  }, [Len, alloChar, allowNum,generatePass]);

  return (
    <>
      <div className='flex justify-center bg-black h-screen w-full'>
        <div className="flex flex-col justify-center my-52 h-25 w-7/12 bg-gray-300 rounded-xl">
          <div>
            <input className="bg-slate-400 placeholder-gray-600 ml-10 px-5 py-2 w-[60%]" placeholder="Password" value={Password} ref={passwordRef}></input>
            <button onClick={handleCopy} style={{backgroundColor:"#212121",color:"white",padding:"8px"}}>COPY</button>
          </div>

          <div className="flex gap-4 mx-10 my-1">
            <input type="range" min={0} max={100} defaultValue={0} onChange={handleLen}></input>
            <label>Length: {Len}</label>
            <label>Allow Characters</label>
            <input type="checkbox" onClick={() => setallowChar(prev => !prev)}></input>
            <label>Allow Numbers</label>
            <input type="checkbox" onClick={() => setallowNum(prev => !prev)}></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
