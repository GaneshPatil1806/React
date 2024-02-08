import { useState } from "react"


function useInfo({
    Options,
    Currency,
    From,
    To,
}) {
    const [Data, setData] = useState();
    
    fetch('https://open.er-api.com/v6/latest/From')
    .then((response) => response.json()).then((data)=>{
        setData(data);
    })

    return Data
}

export default useInfo