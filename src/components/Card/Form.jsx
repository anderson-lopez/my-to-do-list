import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = ({ updateTodos }) => {
  //Obtener datos de los inputs
  const [task, setTask] = useState({ title: '', descripcion: ''})
  //Manejador de errores, inputs vacios
  const [error, setError] = useState(false);
  //Manejador de éxito
  const [success, setSuccess] = useState(false);
  //estado de la tarea
  const [stateTask, setStateTask] = useState(false)


  //Extraccion de valores
  const { title, descripcion } = task;

  //Funcion escucha cuando el usuario escribe
  const handleTask = async (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  //Funcion enviar formulario
  const createTask = async (e) => {
    e.preventDefault();

    //validacion de los campos
    if (title.trim() === '' || descripcion.trim() === '') {
      setError(true)
      return;
    }
    setError(false)

    await axios
      .post(`https://6411afc8b6067ba2f141c093.mockapi.io/api/v1/todos`, { title: task.title, description: task.descripcion, completed: stateTask })
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
  }



  const arrayInputs = [
    {
      id: "14234",
      name: "title",
      styles: "placeholder-slate-900/60 bg-gray-300/90 text-black w-3/4 h-12 rounded-lg px-2 my-5",
      type: "text",
      placeholder: "Titulo de la Tarea",
      funtion: handleTask,
      value: title
    },
  ]


  return (
    <form onSubmit={createTask} action="none" className={`flex flex-col items-center justify-start py-6 bg-[#ffffff75] shadow-lg shadow-gray-500/40 rounded-2xl overflow-hidden w-custom-width h-custom-height`}>
      <div className={`w-full h-1/5 flex flex-col justify-center items-center`}>
        {error ? <h2 className='text-red-700 uppercase'><strong>Todos los campos son requeridos</strong></h2> : success ? <h2 className='text-green-700 uppercase'><strong>La tarea se ha creado correctamente</strong></h2> : null}
        <h2 className={`text-4xl`}><strong>Crea una tarea</strong></h2>
      </div>
      <div className='w-full h-4/5 flex flex-col justify-start items-center'>
        {arrayInputs.map((input, index) => (
          <input value={input.value} onChange={input.funtion} key={index} type={input.type} id={input.id} name={input.name} className={input.styles} placeholder={input.placeholder} />
        ))}
        <textarea value={descripcion} onChange={handleTask} className={`placeholder-slate-900/60 bg-gray-300/90 text-black w-3/4 h-24 rounded-lg p-2`} placeholder={`Descripcion`} name="descripcion" id="description" cols="20" rows="15"></textarea>
        <div  className={`flex w-3/4 my-[1rem] justify-start items-center`}>
          <input type="checkbox" className={`mr-[0.6rem] h-[1.5rem] w-[1.5rem]`} onClick={() => setStateTask(!stateTask)} />
          <h2 className={`text-{1.5rem}`}><strong>{stateTask ? "Tarea Completada" : "La Tarea aun está Activa"}</strong></h2>
        </div>
        <input className={`bg-gray-500/60 hover:bg-gray-800/60 cursor-pointer duration-300  w-3/4 h-12 rounded-lg  p-2`} type="submit" value="Crear" />
      </div>
    </form>
  )
}

export default Form