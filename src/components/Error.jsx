import React from 'react'

export default function Error({isError, msg}) {

  if(isError) {
    return <h5 className='errmsg'>{msg}</h5>
  }
}
