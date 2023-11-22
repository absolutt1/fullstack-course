import React , {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

const App = ( ) => {

    const [data, setData] = useState([]);
    const [location, setLocation] = useState('Almaty');
    const apiKey = '7ab17fd4be83434f818142758232211';

    
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
                setData(response.data);
                console.log(response);
                console.log(response.data.current.temp_c);
            } catch (error) {
                console.error('Error fetching weather data:', error.message);
            }
        };
        getData();
    }, [location]);

    const updateTxt = (e) => {
        if (e.key === 'Enter') setLocation(e.target.value);
    }

	return (
		<div>
            <div>
                <input onKeyDown={updateTxt}></input>
                <p>{data.current?.temp_c}°C</p>
            </div>
		</div>
	)
}

export default App;