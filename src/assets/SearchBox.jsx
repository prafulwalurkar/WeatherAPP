import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import './InfoBox';


export default function SearchBox() {
    let [city, setCity] = useState("");
    const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = "b451c86fc91dc072b06e1a8ceb224f86";

    let getWeatherInfo = async () =>{
        let response = await fetch('${API_URL}?q=${city}&appid=${API_KEY}');
        let jsonResponse = await response.json();
        console.log(jsonResponse);   
        let result = {
            city:city,

            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp-max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feelsLike,
            weather: jsonResponse.weather[0].discription,
        };
        console.log(result);

    }
   

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };
    let handlesubmit = (evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };


    return(
        <div className='SearchBox'><h1>Search For Weather</h1>
        <form onSubmit={handlesubmit}>
        <TextField id="City" label="City Name" variant="outlined" value={city} required onChange={handleChange} />
        <br/>
        <br></br>
        <Button variant="contained" type='submit'>
            Search
        </Button>
        </form>
            
        </div>
        
    );


}