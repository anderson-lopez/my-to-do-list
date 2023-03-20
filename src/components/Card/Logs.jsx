import React, { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai'
import { MdOpenInFull } from "react-icons/md";
import axios from 'axios';
import ModalReusable from '../Modal/ModalReusable';
import { format } from 'date-fns'



const Logs = ({ todo, updateTodos }) => {
  //Estado de Activacion del modal
  const [stateModal, setStateModal] = useState(false)
  //Obtener id
  const [currentId, setCurrentId] = useState("");
  //Obtener datos de los inputs
  const [task, setTask] = useState({ title: '', descripcion: '', })
  //Manejador de errores, inputs vacios
  const [error, setError] = useState(false);
  //Manejador de éxito
  const [success, setSuccess] = useState(false);
  const [seeMore, setSeeMore] = useState(false)
  //Extraccion de valores
  const { title, descripcion } = task;

  //Funcion escucha cuando el usuario escribe
  const handleTask = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const editTask = (e) => {
    e.preventDefault();

    //validacion de los campos
    if (title.trim() === '') {
      setError(true)
      return;
    }
    setError(false)

    axios
      .put(`https://6411afc8b6067ba2f141c093.mockapi.io/api/v1/todos/${currentId}`, { title: task.title, description: task.descripcion })
      .then(() => {
        updateTodos();
      })
      .catch((error) => console.log(error))
    setSuccess(true);
    updateTodos();

    setTask({
      title: '',
      descripcion: '',
    })
    closeAll()
  }

  const closeAll = () => {
    setSuccess(false)
  }

  const handleSeeMore = (id) => {
    setCurrentId(id)
    setSeeMore(true);
    setStateModal(true)
  }

  const handleSeeLess = () => {
    setCurrentId("")
    setSeeMore(false)
  }

  const handleOpenModal = (id) => {
    setCurrentId(id)
    setStateModal(true)
    setSeeMore(false)
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

  const dateFormat = (date) => {

    return (format(new Date(date), 'MM/dd/yyyy'))
  }

  return (
    <div className={`text-gray-400 scrollbar justify-center w-full h-full  flex flex-wrap items-center p-6`}>
      {
        todo.map((todo, index) => (
          todo.id === currentId
            ?
            <ModalReusable key={index} isTitle={true} title={currentId} stateModal={stateModal} setStateModal={setStateModal}>
              {
                seeMore === true
                  ?
                  <div key={index} className={`flex flex-col w-[100%] sm:w-[50rem] h-full  p-[1rem]`}>
                    <div className={`flex justify-around flex-col h-[8rem]`}>
                      <div className={`flex  text-gray-800 `}>
                        <h1 className={`text-[1rem] my-1`}><strong>Titulo:</strong></h1>
                        <h1 className={`text-[1rem] mx-1  text-gray-600 my-1 ml-2`}>{todo.title}</h1>
                      </div>
                      <div className={`flex justify-between text-gray-800 `}>
                        <div className={`w-auto flex`}>
                          <h1 className={`text-[1rem] my-1`}><strong>Nº de Tarea:</strong></h1>
                          <h1 className={`text-[1rem] mx-1 text-gray-600 my-1 ml-2`}>{todo.id}</h1>
                        </div>
                        <div className={`w-auto flex`}>
                          <h1 className={`text-[1rem] ml-6 my-1`}><strong>Creada:</strong></h1>
                          <h1 className={`text-[1rem] mx-1 text-gray-600 my-1 ml-2`}>{dateFormat(todo.createdAt)}</h1>
                        </div>
                      </div>
                    </div>
                    <div className={`flex flex-col text-gray-800 overflow-hidden duration-300 h-[14rem] my-[1rem] `}>
                      <h1 className={`text-[1rem] my-1`}><strong>Descripcion:</strong></h1>
                      <p className={`text-justify`}>{todo.description}</p>
                    </div>

                  </div>
                  :
                  <form onSubmit={editTask} action="none" className={`w-full h-full flex flex-col items-center justify-start py-6 `}>
                    {error ? <h2 className='text-red-700 uppercase'><strong>Todos los campos son requeridos</strong></h2> : success ? <h2 className='text-green-700 uppercase'><strong>La tarea se ha actualizado correctamente</strong></h2> : null}
                    <input className={`placeholder-slate-900/60 bg-gray-500/40 text-black w-3/4 h-12 rounded-lg px-2 my-5`} type="text" name="title" id="title" placeholder='Editar Titulo' value={title} onChange={handleTask} />
                    <textarea value={descripcion} onChange={handleTask} className={`placeholder-slate-900/60 bg-gray-500/40 text-black w-3/4 h-24 rounded-lg p-2`} placeholder={`Editar Descripcion`} name="descripcion" id="description" cols="20" rows="15"></textarea>
                    <input className={`bg-gray-600/60 text-black hover:bg-gray-800/60 cursor-pointer duration-300  w-3/4 h-12 rounded-lg my-5 p-2`} type="submit" value="Editar" />
                  </form>

              }
            </ModalReusable>
            : null
        ))
      }
      {todo
        ?
        todo.map((todo, index) => (
          <div key={index} className={`flex flex-col rounded-2xl w-[25rem] h-[22rem] shadow-lg shadow-gray-500/40 bg-[#ffffff75] m-7 p-5`}>
            <div className={`flex justify-around flex-col h-[8rem]`}>
              <div className={`flex  text-gray-800 `}>
                <h1 className={`text-xl my-1`}><strong>Titulo:</strong></h1>
                <h1 className={`text-xl mx-1  text-gray-600 my-1 ml-2`}>{todo.title}</h1>
              </div>
              <div className={`flex  text-gray-800 `}>
                <h1 className={`text-xl my-1`}><strong>Nº de Tarea:</strong></h1>
                <h1 className={`text-xl mx-1 text-gray-600 my-1 ml-2`}>{todo.id}</h1>
                <h1 className={`text-xl ml-6 my-1`}><strong>Creada:</strong></h1>
                <h1 className={`text-xl mx-1 text-gray-600 my-1 ml-2`}>{dateFormat(todo.createdAt)}</h1>
              </div>
            </div>
            <div className={`flex flex-col text-gray-800 overflow-hidden duration-300 h-[cal(14rem_-_8rem_-_6rem)] my-[1rem] `}>
              <h1 className={`text-xl my-1`}><strong>Descripcion:</strong></h1>
              <p className={`text-justify`}>{todo.description}</p>
            </div>
            <div className={`flex  text-gray-800 `}>
              <h1 className={`text-xl my-1`}><strong>Estado:</strong></h1>
              <h1 className={`text-xl h-[2rem]  text-gray-600 my-1 ml-2`}>{todo.completed === true ? "Completada" : "Activa"}</h1>
            </div>
            <div className={`flex w-full h-[4rem]  justify-center items-center mt-3`}>
              <div onClick={() => handleOpenModal(todo.id)} className={`flex justify-between items-center h-8 p-1 bg-gray-400/50 text-black mx-3 rounded-md hover:bg-slate-200 hover:text-black duration-300 cursor-pointer`}>
                <AiFillEdit className={`mx-1`} />
                <h2 className={`mx-1`}>Editar</h2>
              </div>
              <div onClick={() => handleDeleteTask(todo.id)} className={`flex justify-between items-center h-8 p-1 bg-gray-400/50 text-black mx-3 rounded-md hover:bg-slate-200 hover:text-black duration-300 cursor-pointer`}>
                <BsTrash className={`mx-1`} />
                <h2 className={`mx-1`}>Eliminar</h2>
              </div>
              <div onClick={() => handleSeeMore(todo.id)} className={`flex justify-between items-center h-8 p-1 bg-gray-400/50 text-black mx-3 rounded-md hover:bg-slate-200 hover:text-black duration-300 cursor-pointer`}>
                <MdOpenInFull className={`mx-1`} />
                <h2 className={`mx-1`}>Ver</h2>
              </div>
            </div>

          </div>
        ))
        :
        <div className={`h-full w-full`}>
          <h1>no hay registros</h1>
        </div>
      }

    </div>
  )
}

export default Logs