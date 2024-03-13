import React from 'react'
import Loader from './Spinner'

const ServerError = (show = false) => {
  return (
    <div>
      {show ? (
        <div className='w-full h-full z-50 bg-gradient-to-r from-gray-800/60 to-blue-500/50 absolute top-0 left-0 flex flex-col justify-center items-center'>
          <Loader />
          <h1 className='text-5xl text-white font-bold'>Server Error</h1>
          <h1 className='text-5xl text-white font-bold'>
            Please refresh the page
          </h1>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default ServerError
