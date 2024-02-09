import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData();
    return (
        
        <>
            <div className="flex">
                <img src={`${data.avatar_url}`}/>
                <div className="text-white p-3 bg-black w-[100%]">
                 <p>{data.name}
                 <br></br>
                 Profile: {data.login}
                 </p>
                </div>
            </div>
        </>
    )
}

export const gitHubInfo = async() => {
    const res = await fetch('https:/api.github.com/users/GaneshPatil1806')
    return res.json();
}