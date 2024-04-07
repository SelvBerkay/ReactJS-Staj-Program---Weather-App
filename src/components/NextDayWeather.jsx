import React from 'react'
import { useSelector } from 'react-redux'
import NextDayCard from './NextDayCard'

export default function NextDayWeather() {
  const nextDays = useSelector((state) => state.weather.nextDaysData)
  const pod = useSelector((state) => state.weather.pod)
  const getDayName = (number) => {
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dt = new Date();
    const dayIndex = dt.getDay() + number
    if (dayIndex > 6) {
      return weekday[dayIndex - 7].slice(0, 3)
    } else {
      return weekday[dt.getDay() + number].slice(0, 3)
    }
  }

  const nextDay = { data: nextDays[0], day: getDayName(1) }
  const twoDay = { data: nextDays[1], day: getDayName(2) }
  const threeDay = { data: nextDays[2], day: getDayName(3) }
  const fourDay = { data: nextDays[3], day: getDayName(4) }
  const fiveDay = { data: nextDays[4], day: getDayName(5) }
  const daysArr = [nextDay, twoDay, threeDay, fourDay, fiveDay]


  return (
    <>
      <div className="nextWeather">
        {
          daysArr.map((item, i) => <NextDayCard key={i} max={Math.trunc(item.data.temp.max)} min={Math.trunc(item.data.temp.min)} main={item.data.weather[0].main} day={item.day} pod={pod} />)
        }
      </div>
    </>
  )
}
