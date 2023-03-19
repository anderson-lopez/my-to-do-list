import React, { useEffect, useState } from 'react'
import Form from './Form'
import Logs from './Logs'
import axios from 'axios';
import { BiSearchAlt } from "react-icons/bi";


const Card = () => {

  //Almacenando datos
  const [todo, setTodo] = useState([])
  //Almencenando datos paraa abuscar
  const [FilterTodo, setFilterTodo] = useState([])
  const [inputFilter, setInputFilter] = useState("")

  //Obtener siempre los registros al cargar o recargar la pagina
  useEffect(() => {
    updateTodos()
  }, [])

  //Guardar en el estado el value del input
  const handlechange = e => {
    setInputFilter(e.target.value)
    handleFilter(e.target.value)
  }

  const handleFilter = (filter) => {
    let filteredresult = FilterTodo.filter((element) => {
      if(element.title.toString().toLowerCase().includes(filter.toLowerCase())
        || element.description.toString().toLowerCase().includes(filter.toLowerCase())
        || element.id.toString().toLowerCase().includes(filter.toLowerCase())
        ){
          return element
        }
    });

    setTodo(filteredresult)
  }

  // Función para actualizar la lista de tareas
  const updateTodos = async () => {
    await axios
      .get(`https://6411afc8b6067ba2f141c093.mockapi.io/api/v1/todos`)
      .then((response) => {
        setTodo(response.data.reverse())
        setFilterTodo(response.data)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={`w-full h-full flex flex-col `}>
      <div className={`p-[1rem] flex justify-center items-center w-full h-ull text-gray-400`}>
        <Form updateTodos={updateTodos} />
      </div>
      <h2 className={`text-4xl text-center text-gray-400 my-9`}><strong>Lista de tareas</strong></h2>
      <div className={` flex justify-center items-center w-full h-[5rem]`}>
        <div className={` w-[20rem]`} >
          <input onChange={handlechange} className={` placeholder-slate-900/60 bg-slate-300 text-black h-12 rounded-lg px-2 w-full`} type="text" value={inputFilter} placeholder={"Filtrar por Titulo, Description o Nº de tarea"} />
        </div>
        <div className={`flex justify-between items-center h-[3rem] w-[2.5rem] mx-[0.5rem] p-1 bg-slate-200  rounded-md text-gray-400 `}>
          <BiSearchAlt className={`mx-1 text-2xl`} />
        </div>
      </div>
      <Logs todo={todo} updateTodos={updateTodos} />
    </div>
  )
}

export default Card;