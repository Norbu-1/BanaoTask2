import React, { useEffect, useState } from 'react';
import Section from './components/Section';
import Spinner from './components/Spinner'; 

const App = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
        const data = await response.json();
        setUser(data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container-fluid  vh-100 '>
        <Section use={user} spin={isLoading} />
     
    </div>
  );
};

export default App;
