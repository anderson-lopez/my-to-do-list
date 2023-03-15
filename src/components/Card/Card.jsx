import React, { useState } from 'react'
import Form from './Form'
import Logs from './Logs'

const Card = () => {

  //Arreglo de Tasks
  const [loadTasks, setLoadTasks] = useState([])

  //Funcion Agregar nueva task
  const addNewTask = task => {
    setLoadTasks([
      ...loadTasks,
      task
    ])
  }

  return (
    <div className={`w-full h-full flex `}>
      <div className={`flex justify-center items-center w-2/6 h-full text-gray-400`}>
        <Form addNewTask={addNewTask}/>
      </div>
      <div className={`flex flex-col justify-center items-center w-3/4 h-full text-gray-400`}>
        <Logs/>
      </div>
    </div>
  )
}

export default Card