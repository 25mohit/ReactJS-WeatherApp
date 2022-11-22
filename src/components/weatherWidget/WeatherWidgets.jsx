import { useEffect, useState } from 'react'
import { InfoDetail } from '../infoDetail/InfoDetail'
import './WeatherWidgets.css'
import AirIcon from '@mui/icons-material/Air';
import {BsDroplet} from 'react-icons/bs'
import {BsCalendarDate} from 'react-icons/bs'
import {BiTime} from 'react-icons/bi'
import {GiMultiDirections} from 'react-icons/gi'
import {WiSunrise} from 'react-icons/wi'

import {WiSunset} from 'react-icons/wi'

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
                    <img src={
                        (allData.description ===("haze"|| "Snow" || "light snow"||"Heavy snow"||"Sleet" ||"Light shower sleet" ||
                        "Shower sleet" || "Light rain and snow" || "Rain and snow" || "Light shower snow" ||"Shower snow" || "freezing rain" || 
                        "Heavy shower snow")&& 'https://openweathermap.org/img/wn/13d@4x.png' )||
                     (allData.description ===("thunderstorm with light rain" || "thunderstorm with rain" || "thunderstorm with heavy rain" ||
                     "light thunderstorm" || "thunderstorm" || "heavy thunderstorm" || "ragged thunderstorm" || "thunderstorm with light drizzle" ||
                     "thunderstorm with drizzle" || "thunderstorm with heavy drizzle")&& 'https://openweathermap.org/img/wn/11d@4x.png' )||
                     (allData.description ===("light intensity drizzle" || "drizzle"  || "heavy intensity drizzle" || "light intensity drizzle rain" || "drizzle rain" ||
                     "heavy intensity drizzle rain" || "shower rain and drizzle" || "heavy shower rain and drizzle" || "light intensity shower rain" || "shower rain" || "heavy intensity shower rain" ||
                      "ragged shower rain"|| "shower drizzle") && 'https://openweathermap.org/img/wn/09d@4x.png' )||
                      (allData.description ===("light rain" || "moderate rain"||"heavy intensity rain"||"very heavy rain"||"extreme rain")&& 'https://openweathermap.org/img/wn/10d@4x.png' )||
                      (allData.description ===("mist"  || "Smoke"  || "sand/ dust whirls" || "fog" || "sand" || "dust" || "volcanic ash" || "squalls" || "tornado") && 'https://openweathermap.org/img/wn/50d@4x.png' )||
                      (allData.description ==="clear sky" && 'https://openweathermap.org/img/wn/01d@4x.png' )||
                      (allData.description ==="scattered clouds" && 'https://openweathermap.org/img/wn/03d@4x.png' )||
                      (allData.description ==="broken clouds" && 'https://openweathermap.org/img/wn/04d@4x.png' )||
                      (allData.description ==="overcast clouds" && 'https://openweathermap.org/img/wn/04n@4x.png' )||
                     (allData.description ==="few clouds" && 'https://openweathermap.org/img/wn/02d@4x.png' )
                    }
                      alt=""  className='weather-icon'/>
                    <p className="weather-des">{allData && allData.description + ','}&nbsp;</p>  
                    <p className="w-location">{allData.location}</p>
                    <div className="extra-info">
                            <p className="w-info"><BsDroplet className='w-info-icon' />{ 'Humidity: '+allData.humidity + '%'}</p>
                            <p className="w-info"><AirIcon  className='w-info-icon' />{ 'Wind: '+Math.ceil(allData.wind_speed*3.6) + ' km/h'}</p>
                            <p className="w-info"><GiMultiDirections className='w-info-icon'  />{ 'Wind Direction: '+allData.wind_deg}</p>
                    </div>
                </div>
                <div className="js-c-t">
                    <div className="today-time">
                        <p className="date"><BsCalendarDate className='w-date-icons'/>{date && date}</p>
                        <p className="time"><BiTime className='w-date-icons' />{ time && time}</p>
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
                                    <p>High&nbsp;&nbsp;Low</p>
                            </div>
                    </div>
                    <div className="presure-temp-div">
                        <p className="presure-text">{ 'Presure: '+allData.pressure } </p>
                        <p className="presure-text" onMouseEnter={() => setShowInfoOne(true)} onMouseOut={() => setShowInfoOne(false)}>{ 'Feels Like: '+Math.ceil(allData.feels_like-273) }&deg;</p>
                        <p className="presure-text"><WiSunrise className='w-rise-icons'/>Sunrise : { result && result}</p>
                        <p className="presure-text"><WiSunset className='w-rise-icons' />Sunset : { sresult && sresult}</p>
                    </div>
            </div>
            
        </div>
        
        { showInfoOne &&  <InfoDetail setShowInfoOne={setShowInfoOne} message={"This temperature parameter accounts for the human perception of weather."}/>}
        </div>
  )
}
