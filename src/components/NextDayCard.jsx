import React from 'react'
import { dayIcon, nightIcon } from '../images/weathericon'

export default function NextDayCard({max,min,main,day,pod}) {
  const icon = pod === "d" ? dayIcon.find(item => item.name === main) : nightIcon.find(item => item.name === main)
  return (
    <div className='nextCard'>
      <p className='nextDate'>{day}</p>
      <img src={icon.url} alt="" className='nextIcon'/>
      <p className='nextTempMax'>{max}ºc</p>
      <p className='nextTempMin'>{min}ºc</p>
    </div>
  )
}
