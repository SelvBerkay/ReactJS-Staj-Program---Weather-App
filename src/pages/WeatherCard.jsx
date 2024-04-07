import React, { useState } from 'react'
import CurrentWeather from '../components/Weather/CurrentWeather'
import WeatherDetails from '../components/Weather/WeatherDetails'
import Form from '../components/Form'
import NextDayWeather from '../components/Weather/NextDayWeather'
import HourlyWeather from '../components/Weather/HourlyWeather'


export default function WeatherCard() {
  const [hourly, setHourly] = useState(false)
  return (
    <>

      <Form />
      <div className="weatherCard">
        <CurrentWeather />
        <WeatherDetails />
        {
          hourly ? <HourlyWeather /> : <NextDayWeather />
        }
        <button className='dailyOrHourlyBtn' onClick={() => setHourly(!hourly)}>
          {
            hourly ? "Click to see daily" : "Click to see hourly"
          }
        </button>
      </div>

    </>
  )
}
