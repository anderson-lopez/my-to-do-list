import React from 'react'
import Form from './Form'

const Card = () => {
  return (
    <div className={`w-full h-full flex `}>
      <div className={`flex justify-center items-center w-2/6 h-full text-gray-400`}>
        <Form/>
      </div>
      <div className={`flex flex-col justify-center items-center w-3/4 h-full text-gray-400`}>
        
      </div>
    </div>
  )
}

export default Card