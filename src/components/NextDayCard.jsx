import React from 'react'
import findIcon from '../utils/findIcon'

export default function NextDayCard({max,min,main,day,pod}) {
  const iconUrl = findIcon(pod, main)
  return (
    <div className='nextCard'>
      <p className='nextDate'>{day}</p>
      <img src={iconUrl} alt="icon" className='nextIcon'/>
      <p className='nextTempMax'>{max}ºc</p>
      <p className='nextTempMin'>{min}ºc</p>
    </div>
  )
}
