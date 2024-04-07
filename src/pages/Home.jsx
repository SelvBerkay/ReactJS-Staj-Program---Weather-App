import React from 'react'
import Form from '../components/Form'

export default function Home() {
  return (
    <>
      <div className="title-container">
        <h1 className='title'>Welcome to <span className='title-span'>TypeWeather</span></h1>
        <p className='subtitle'>Choose a location to see the weather forecast</p>
      </div>
      <Form />
    </>
  )
}
