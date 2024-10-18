import React, { useEffect, useState } from 'react';

const Task4 = () => {
  const [data, setData] = useState(null);   // To store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    // Fetch data from API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);   // Set the fetched data
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false);        // Set loading to false in case of error
      });
  }, []);  // Empty dependency array means it runs only once, after the first render

  // Display loading, error, or data based on the state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        <li>ID: {data.id}</li>
        <li>Title: {data.title}</li>
        <li>Completed: {data.completed ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default Task4;