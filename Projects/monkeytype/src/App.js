import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/4k-db.csv'); // Assumes the CSV file is in the public folder
      const reader = response.body.getReader();
      const result = await reader.read();
      const text = new TextDecoder('utf-8').decode(result.value);
      
      console.log(text[116]);
      console.log(text[1]);
      console.log(text[2]);
      console.log(text[3]);
      console.log(text[4]);
      console.log(text[5]);
      console.log(text[6]);

      console.log(result.value);
      

      // Parse CSV data using papaparse
      Papa.parse(text, {
        header: true,
        complete: (result) => {
          setData(result.data);
        },
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>{data.length > 0 && data[0].columnName}</div>
    </div>
  );
};

export default App;
