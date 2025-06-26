import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";



export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL ="https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.jpg?s=2048x2048&w=is&k=20&c=cn5lJgGTT1jTIy4Z38EAfxoJevgnZ0IJ-NsFEAscYnE="
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8="




    return(
            <div><br></br>
            <div class="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={info.humidity >80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} 
                    </Typography>
                    <h2>Weather Info - {info.weather}</h2>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div class="Temp" >{info.temp}&deg;C</div>
                    <div>Humidity = {info.humidity}&deg;C</div>
                    <div>Temp Max = {info.tempMax}&deg;C</div>
                    <div>Temp Min = {info.tempMin}&deg;C</div>
                    
                    <div>feels like = {info.feelsLike}&deg;C</div>
                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                </div> 
                
            
            </div>
            
        );    
    
}