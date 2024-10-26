import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox(){
    const Initialurl = "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    let Info = {
        city:"Delhi",
        humidity:47,
        weather:'haze',
        feelsLike:24.24,
        temp:25.05,
        tempMin:25.04,
        tempMax:25.10,
        };
        return(

            <div className="InfoBox">
                <h1>Weather Info- {Info.weather}</h1>
                <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={Initialurl}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {Info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div>Teamperature : {Info.temp}</div>
                    <div>Max Teamperature : {Info.tempMax}</div>
                    <div>Min Teamperature : {Info.tempMin}</div>
                    <div>FeelsLike : {Info.feelsLike}</div>
                    <div>Humidity : {Info.humidity}</div>
                    <p>The weather can be discribe as <i>{Info.weather}</i> and feels like {Info.feelsLike} &deg;C</p>
                    
                </Typography>
                </CardContent>
                </Card>
                
                
            </div>
        )

}