import React from 'react'
import findIcon from '../utils/findIcon'

export default function HourlyCard({max,min,main,hour,pod}) {
  const iconUrl = findIcon(pod, main)
  return (
    <div className='nextCard'>
      <p className='nextDate'>{hour.slice(11,16)}</p>
      <img src={iconUrl} alt="icon" className='nextIcon'/>
      <p className='nextTempMax'>{max}ºc</p>
      <p className='nextTempMin'>{min}ºc</p>
    </div>
  )
}
