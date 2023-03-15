import React from 'react'
import { FaTasks } from 'react-icons/fa'

const Header = () => {
  return (
    <div className={`w-full h-48 flex justify-center items-center bg-neutral-900 text-gray-400`}>
      <div className={`flex text-5xl`}>
        <FaTasks className={`mx-10`}/>
        <h1><strong>Todo List</strong></h1>
      </div>
    </div>
  )
}

export default Header