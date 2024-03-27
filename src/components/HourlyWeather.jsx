import React from 'react'
import { useSelector } from 'react-redux'
import HourlyCard from './HourlyCard'

export default function HourlyWeather() {
  const nextDays = useSelector((state) => state.weather.hourlyData)
  
  const three = nextDays[1]
  const six = nextDays[2]
  const nine = nextDays[3]
  const twelwe = nextDays[4]
  const fifteen = nextDays[5]
  const hourArr = [three,six,nine,twelwe,fifteen]

  
  return (
    <>
      <div className="nextWeather">
        {
          hourArr.map((item, i) => <HourlyCard key={i} max={item.main.temp_max} min={item.main.temp_min} main={item.weather[0].main} hour={item.dt_txt} pod={item.sys.pod}/>)
        }
      </div>
    </>
  )
}

