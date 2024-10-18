import React, { useState, useEffect } from 'react';

const Task3 = () => {

    const [name, setName] = useState('');


    const [data, setData] = useState(null);


    const handleInputChange = (e) => {
        setName(e.target.value);
    };


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1') // Example API
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h1>Enter your name:</h1>
            <input type="text" value={name} onChange={handleInputChange} placeholder="Type your name"/>
            <p>Your name is: {name}</p>
            <h2>Fetched Data from API:</h2>
            {data ? (
                <div>
                    <p>Title: {data.title}</p>
                    <p>Body: {data.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Task3;