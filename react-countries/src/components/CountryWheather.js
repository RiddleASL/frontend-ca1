import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"
import { CloudDrizzle, CloudRain, CloudSnow, MoonStars, Sun, ThermometerHalf, Wind } from "react-bootstrap-icons"

const CountryWheather = (props) => {
    const [wheather, setWheather] = useState([])
    // console.log(props.props);

    useEffect(()=>{
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${props.props[0]}&longitude=${props.props[1]}&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,windspeed_10m`)
        .then(response => {
            // console.log(response.data);
            setWheather(response.data)
        })
    },[props.props])

    if(wheather.length != 0){
        return(
            <>
                <span className="p-3">
                    <div>
                        <h2>Day/Night : {wheather.current.is_day == 1 ? <Sun /> : <MoonStars />}</h2>
                    </div>
                    <div>
                        <ThermometerHalf/> Temperature: {`${wheather.current.temperature_2m}${wheather.current_units.temperature_2m}`}/{`${((+(wheather.current.temperature_2m)*(9/5))+32).toFixed(1)}°F`}
                    </div>
                    <div>
                        <Wind /> Windspeed : {`${wheather.current.windspeed_10m}`}
                    </div>
                    <div>
                    {wheather.current.rain > 0 ? <CloudRain /> : ""}
                    {wheather.current.showers > 0 ? <CloudDrizzle /> : ""}
                    {wheather.current.snowfall > 0 ? <CloudSnow /> : ""}
                    </div>
                </span>
            </>
        )
    } else {
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    }
    
}

export default CountryWheather