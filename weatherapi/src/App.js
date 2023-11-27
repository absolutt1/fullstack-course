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
                <input onKeyDown={updateTxt} defaultValue={"Type in your City..."}></input>
                <div className="container">
                    <div className="main">     
                        <div className="content">
                            <p1 className="condition" style={{fontWeight: "bold"}}>{location}, {data.location?.country}</p1>
                            <br>
                            </br>
                            <p1 className="condition" style={{textTransform: 'lowercase'}}>{data.current?.condition?.text}</p1>    
                        </div>
                        <img src={data.current?.condition?.icon}></img>
                    </div>
                    <div className="container-details">
                        <div className="temp">
                            <p1 style={{fontSize: "50px"}}>
                                {data.current?.temp_c}°C
                            </p1>
                        </div>
                        <div className="details">
                            <p3 style={{fontWeight: "bold"}}>Details</p3>
                            <div className="line"></div>
                            <div className="data">
                                <div>Feels like</div>
                                <div style={{marginRight: '15px'}}>{data.current?.feelslike_c}°C</div>
                            </div>
                            <div className="data">
                                <div>Wind</div>
                                <div style={{marginRight: '15px'}}>{data.current?.wind_mph} m/s</div>
                            </div>
                            <div className="data">
                                <div>Humidity</div>
                                <div style={{marginRight: '15px'}}>{data.current?.humidity}%</div>
                            </div>
                            <div className="data">
                                <div>Pressure</div>
                                <div style={{marginRight: '15px'}}>{data.current?.pressure_mb} hPa</div>
                            </div>
                        </div> 
                    </div>
                </div>      
            </div>
		</div>
	)
}

export default App;