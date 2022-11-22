import {  useState } from 'react';
import axios from 'axios'
import './App.css';
import { WeatherWidgets } from './components/weatherWidget/WeatherWidgets';
import {TiWeatherPartlySunny} from 'react-icons/ti'
import { EmptyWeather } from './components/emptyWeather/EmptyWeather';


function App() {
  const[city, setCity ] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  // console.log();
  const [data, setData] = useState({
     description:"",
     temp:0,
     temp_max:0,
     temp_min:0,
     humidity:0,
     sunrise:0,
     location:'',
     sunset:0,
     country:""
  })
  var today = new Date()
    const submitHandler = (e) => {
      e.preventDefault()
      if(city != ''){
      setDate(today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear())
      setTime(formatAMPM(new Date) )

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93843e898ff6bd71880702639732632a`)
      .then((res) => {
        setData({
          description:res.data.weather[0].description,
          temp:res.data.main.temp,
          pressure:res.data.main.pressure,
          feels_like:res.data.main.feels_like,
          temp_max:res.data.main.temp_max,
          temp_min:res.data.main.temp_min,
          humidity:res.data.main.humidity,
          sunrise:res.data.sys.sunrise,
          sunset:res.data.sys.sunset,
          location:res.data.name,
          wind_speed:res.data.wind.speed,
          wind_deg:res.data.wind.deg,
          country:""
        })
      })
    }else{
      alert('Please Enter a City Name ')
    }
  }

  return (
    <div className="App">
      <form>
          <input type='text' placeholder='enter city' value={ city } onChange={ e => setCity(e.target.value)} autoComplete='false'/>
          <button onClick={submitHandler} className='submit-div'>
            <TiWeatherPartlySunny className='icon-bt'/>
            <p>See Weather</p>
          </button>
      </form>
      {data.temp ?
      <WeatherWidgets allData = { data } date={date} time={ time }/>
      : <EmptyWeather />}
    </div>
  );
}

export default App;
