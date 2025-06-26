import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"



export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
    let[error, setError] = useState(false);
    



    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="b451c86fc91dc072b06e1a8ceb224f86";

 
    const getWeatherInfo = async () => {
    try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();

        if (!jsonResponse.main || !jsonResponse.weather) {
            throw new Error("Invalid API response structure");
        }

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        console.log(result);
        return result;

    } catch (err) {
        console.error("Error fetching weather data:", err);
        return null;
    }
};


     let handleChange =(evt)=>{
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    };



    return(
        <div>
            
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Enter the City" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">
            Search
            </Button>
            {error && <p style={{color:"red"}}>No Such Place Exsist!</p>}
            </form>
        </div>
    )
}