import React, { useState } from 'react'
import { BsTrash } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai'
import { BiSave } from "react-icons/bi";
import axios from 'axios';
import ModalReusable from '../Modal/ModalReusable';



const Logs = ({ todo, updateTodos }) => {
  const [stateModal, setStateModal] = useState(false)
  const [currentId, setCurrentId] = useState("");

  const handleEditTask = (id) => {
    setCurrentId(id)
    setStateModal(!stateModal)
    console.log('me activaste')
  }

  const handleDeleteTask = (id) => {
    axios
    .delete(`https://6411afc8b6067ba2f141c093.mockapi.io/api/v1/todos/${id}`)
    .then(() => {
      updateTodos();
      alert(`Se eliminó corectamente la tarea Nº: ${id}`)
    })
    .catch((error) => console.log(error))
  }

  // const bottons = (id) => {
  //   return (

  //   )
  // }

  return (
    <div className={`scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-400 rounded-2xl w-4/5 h-3/4 bg-gray-600/30 flex flex-col justify-start overflow-y-scroll items-center p-6`}>
      {todo
        ?
        todo.map((todo) => (
          <div className={`flex flex-col rounded-2xl w-full bg-slate-700 my-7 p-5`} key={todo.id}>
            <div className={`flex text-gray-400 `}>
              <h1 className={`text-xl my-1`}><strong>Titulo:</strong></h1>
              <h1 className={`text-2xl mx-1 text-gray-300 px-2 `}><>{todo.title}</></h1>
              <h1 className={`text-xl my-1`}><strong>Nº de Tarea:</strong></h1>
              <h1 className={`text-2xl mx-1 text-gray-300 px-2 `}><>{todo.id}</></h1>
            </div>
            <div className={`flex flex-col text-gray-400 `}>
              <h1 className={`text-1xl my-1`}><strong>Dsescripcion:</strong></h1>
              <p className={`text-justify`}>{todo.description}</p>
            </div>
            <div className={`flex w-full justify-center my-3`}>
              <div onClick={() => handleEditTask(todo.id)} className={`flex justify-between items-center h-8 p-1 bg-gray-800 mx-3 rounded-md hover:bg-slate-200 hover:text-black duration-300 cursor-pointer`}>
                <AiFillEdit className={`mx-1`} />
                <h2 className={`mx-1`}>Editar</h2>
              </div>
              <div onClick={() => handleDeleteTask(todo.id)} className={`flex justify-between items-center h-8 p-1 bg-gray-800 mx-3 rounded-md hover:bg-slate-200 hover:text-black duration-300 cursor-pointer`}>
                <BsTrash className={`mx-1`} />
                <h2 className={`mx-1`}>Eliminar</h2>
              </div>
            </div>

          </div>
        ))
        : <h1>no hay registros</h1>
      }

      {
        todo.map((todo) => (
          todo.id === currentId
          ?
            <ModalReusable isTitle={true} title={currentId} stateModal={stateModal} setStateModal={setStateModal} >
              <h1>holis, me activé</h1>
            </ModalReusable>
          : null
        ))
      }
    </div>
  )
}

export default Logs