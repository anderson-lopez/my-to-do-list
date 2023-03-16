import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = ({ updateTodos }) => {
  //Obtener datos de los inputs
  const [task, setTask] = useState({ title: '', descripcion: '', })
  //Manejador de errores, inputs vacios
  const [error, setError] = useState(false);
  //Manejador de éxito
  const [success, setSuccess] = useState(false);


  //Extraccion de valores
  const { title, descripcion } = task;

  //Funcion escucha cuando el usuario escribe
  const handleTask = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  //Funcion enviar formulario
  const createTask =  (e) => {
    e.preventDefault();

    //validacion de los campos
    if (title.trim() === '' || descripcion.trim() === '') {
      setError(true)
      return;
    }
    setError(false)

    axios
      .post('https://6411afc8b6067ba2f141c093.mockapi.io/api/v1/todos', {title: task.title, description: task.descripcion})
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
      styles: "placeholder-slate-900/60 bg-slate-300 text-black w-3/4 h-12 rounded-lg px-2 my-5",
      type: "text",
      placeholder: "Titulo de la Tarea",
      funtion: handleTask,
      value: title
    },
  ]


  return (
    <form onSubmit={createTask} action="none" className={`flex flex-col items-center justify-start py-6 bg-gray-600/30 rounded-2xl overflow-hidden w-custom-width h-custom-height`}>
      <div className={`w-full h-1/5 flex flex-col justify-center items-center`}>
        {error ? <h2 className='text-red-700 uppercase'><strong>Todos los campos son requeridos</strong></h2> : success ? <h2 className='text-green-700 uppercase'><strong>La tarea se ha creado correctamente</strong></h2> : null}
        <h2 className={`text-4xl`}><strong>Crea una tarea</strong></h2>
      </div>
      <div className='w-full h-4/5 flex flex-col justify-start items-center'>
        {arrayInputs.map((input, index) => (
          <input value={input.value} onChange={input.funtion} key={index} type={input.type} id={input.id} name={input.name} className={input.styles} placeholder={input.placeholder} />
        ))}
        <textarea value={descripcion} onChange={handleTask} className={`placeholder-slate-900/60 bg-slate-300 text-black w-3/4 h-24 rounded-lg p-2`} placeholder={`Descripcion`} name="descripcion" id="description" cols="20" rows="15"></textarea>
        <input className={`bg-slate-600 hover:bg-slate-800 cursor-pointer duration-300  w-3/4 h-12 rounded-lg my-5 p-2`} type="submit" value="Crear" />
      </div>
    </form>
  )
}

export default Form