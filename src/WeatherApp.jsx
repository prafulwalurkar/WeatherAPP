import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike : 36.2,
        humidity  : 18,
        temp : 37.96,
        tempMax : 37.96,
        tempMin : 37.96,
        weather:"broken clouds",
        windspeed : 5.0,

    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(<div style={{textAlign:"center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}></SearchBox>
        <InfoBox info={weatherInfo}></InfoBox>
        
    </div>

    );
}