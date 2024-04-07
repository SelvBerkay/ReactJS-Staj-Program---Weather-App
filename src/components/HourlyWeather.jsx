import React from 'react'
import { useSelector } from 'react-redux'
import HourlyCard from './HourlyCard'
import { getHourWithTimeZone } from '../utils/getTimeZone'
export default function HourlyWeather() {
  const { hourlyData, timezone } = useSelector((state) => state.weather)
  const formattedHourlyData = (data) => {
    const { main: { temp_max, temp_min }, weather: [{ main }], sys: { pod } } = data;
    return {
      temp_max,
      temp_min,
      main,
      pod
    }
  }
  const hourlyDataArr = [
    {
      data: formattedHourlyData(hourlyData[0]),
      hour: getHourWithTimeZone(timezone, 3)
    },
    {
      data: formattedHourlyData(hourlyData[1]),
      hour: getHourWithTimeZone(timezone, 6)
    },
    {
      data: formattedHourlyData(hourlyData[2]),
      hour: getHourWithTimeZone(timezone, 9)
    },
    {
      data: formattedHourlyData(hourlyData[3]),
      hour: getHourWithTimeZone(timezone, 12)
    },
    {
      data: formattedHourlyData(hourlyData[4]),
      hour: getHourWithTimeZone(timezone, 15)
    }
  ]
  return (
      <div className="nextWeather">
        {
          hourlyDataArr.map((item, i) =>
            <HourlyCard key={i}
              max={Math.trunc(item.data.temp_max)}
              min={Math.trunc(item.data.temp_min)}
              main={item.data.main}
              hour={item.hour}
              pod={item.data.pod} />
          )
        }
      </div>
  )
}

