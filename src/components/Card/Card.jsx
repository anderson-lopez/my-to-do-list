import React, { useEffect, useState } from 'react'
import Form from './Form'
import Logs from './Logs'
import axios from 'axios';


const Card = () => {

  //Almacenando datos
  const [todo, setTodo] = useState([])

  //Obtener siempre los registros al cargar o recargar la pagina
  useEffect(() => {
    axios
      .get('https://6411afc8b6067ba2f141c093.mockapi.io/api/v1/todos')
      .then(response => setTodo(response.data))
      .catch(error => console.log(error))
  }, [])

  // Función para actualizar la lista de tareas
  const updateTodos = () => {
    axios
      .get('https://6411afc8b6067ba2f141c093.mockapi.io/api/v1/todos')
      .then((response) => setTodo(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className={`w-full h-5/6 flex `}>
      <div className={`flex justify-center items-center w-2/6 h-full text-gray-400`}>
        <Form updateTodos={updateTodos}/>
      </div>
      <div className={`flex flex-col justify-center items-center w-3/4 h-full overflow-y-hidden text-gray-400`}>
        <h2 className={`text-4xl text-gray-400 my-9`}><strong>Lista de tareas</strong></h2>
        <Logs todo={todo} updateTodos={updateTodos} />
      </div>
    </div>
  )
}

export default Card