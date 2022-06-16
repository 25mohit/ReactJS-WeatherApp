import { useState } from 'react'
import { InfoDetail } from '../infoDetail/InfoDetail'
import './WeatherWidgets.css'

export const WeatherWidgets = ({ allData, date, time}) => {
    const riseStamp = allData.sunrise
    let dateObj = new Date(riseStamp*1000)
    let hours = dateObj.getHours().toString().padStart(2,0);
    let minutes = dateObj.getMinutes().toString().padStart(2,0);
    let result = `${hours}:${minutes}`

    const setStamp = allData.sunset
    let sDate = new Date(setStamp*1000)
    let shours = sDate.getHours().toString().padStart(2,0);
    let sminutes = sDate.getMinutes().toString().padStart(2,0);
    let sresult = `${shours}:${sminutes}`

    const [showInfoOne, setShowInfoOne] = useState(false)
  return (
    <div className='weather-widget'>
        <div className="container">
            <div className="weather-head">
                <div className="js-c">
                    <p className="m-weather"> {Math.floor(allData.temp-273 )}&deg;</p>
                    <p className="weather-des">{allData && allData.description + ','}&nbsp;</p>  
                    <p className="w-location">{allData.location}</p>
                    <div className="extra-info">
                            <p className="w-info">{ 'Humidity: '+allData.humidity + '%'}</p>
                            <p className="w-info">{ 'Wind: '+Math.ceil(allData.wind_speed*3.6) + ' km/h'}</p>
                            <p className="w-info">{ 'Wind Direction: '+allData.wind_deg}</p>
                    </div>
                </div>
                <div className="js-c">
                    <div className="today-time">
                        <p className="date">{date && date}</p>
                        <p className="time">{ time && time}</p>
                    </div>
                </div>
            </div>
            <div className="weather-mid">
                    <div className="mid-low-temp">
                            <div className="head-temp">
                                    <p className="temp-level">{Math.floor(allData.temp_min-273)}&deg;</p>
                                    <p className="temp-level">{Math.floor(allData.temp_max-273)}&deg;</p>
                            </div>
                            <div className="high-low-text">
                                    <p>High &nbsp;&nbsp;Low</p>
                            </div>
                    </div>
                    <div className="presure-temp-div">
                        <p className="presure-text">{ 'Presure: '+allData.pressure } </p>
                        <p className="presure-text" onMouseEnter={() => setShowInfoOne(true)} onMouseOut={() => setShowInfoOne(false)}>{ 'Feels Like: '+Math.ceil(allData.feels_like-273) }&deg;</p>
                        <p className="presure-text">Sunrise : { result && result}</p>
                        <p className="presure-text">Sunset : { sresult && sresult}</p>
                    </div>
            </div>
        </div>
        { showInfoOne &&  <InfoDetail setShowInfoOne={setShowInfoOne} message={"This temperature parameter accounts for the human perception of weather."}/>}
    </div>
  )
}
