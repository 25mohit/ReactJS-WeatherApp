import './EmptyWeather.css'

export const EmptyWeather = () => {
  return (
    <div className='empty-weather-div'>
                <div className="empty-container">
                        <p className="empty-text">
                                Please enter a city name, to see live weather condition of there....
                        </p>
                </div>
    </div>
  )
}
