import React from 'react'
import { useSelector } from 'react-redux'
import HourlyCard from './HourlyCard'

export default function HourlyWeather() {
  const hourly = useSelector((state) => state.weather.hourlyData)

  const three = hourly[0]
  const six = hourly[1]
  const nine = hourly[2]
  const twelve = hourly[3]
  const fifteen = hourly[4]
  const hourArr = [three, six, nine, twelve, fifteen]


  return (
    <>
      <div className="nextWeather">
        {
          hourArr.map((item, i) => <HourlyCard key={i} max={Math.trunc(item.main.temp_max)} min={Math.trunc(item.main.temp_min)} main={item.weather[0].main} hour={item.dt_txt} pod={item.sys.pod} />)
        }
      </div>
    </>
  )
}

