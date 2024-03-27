import React, { useState } from 'react'
import CurrentWeather from './CurrentWeather'
import WeatherDetails from './WeatherDetails'
import Form from './Form'
import NextDayWeather from './NextDayWeather'
import HourlyWeather from './HourlyWeather'


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
