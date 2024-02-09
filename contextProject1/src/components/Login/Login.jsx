import {useState,useContext} from "react"
import UserContext from "../../context/UserContext";

export default function Login() {
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    function handleSubmit(e){
        e.preventDefault();
        setUser({username,password});
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
                <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
                
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
