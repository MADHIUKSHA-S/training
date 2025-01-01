import { useState, useEffect } from "react";
import axios from 'axios';

const UseEffect = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then((res) => {
                console.log(res.data);
                setPost(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <section>
            <h1>Fetching data from JSON Placeholder API</h1>
            <ol>
                {post.map((data) => (
                    <li key={data.id}>{data.title}</li>
                ))}                                        
            </ol>
        </section>
    );
};

export default UseEffect;
