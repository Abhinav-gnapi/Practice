import { useEffect, useState } from "react"

function Hooks(){
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((err) => console.log(err))
    },[]);

    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {data.map((item) => <li>{item.title}</li>)}
            </ul>
        </div>
    );
};
export default Hooks;