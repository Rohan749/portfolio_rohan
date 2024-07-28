import React from 'react'
import light from "../assets/images/light.png"

const LoadingScreen = () => {
  return (
    <div className='title flex items-center z-50 justify-center h-[100vh] w-[100%]'>
        <img src={light} alt='' />
        LOADING...
    </div>
  )
}

export default LoadingScreen