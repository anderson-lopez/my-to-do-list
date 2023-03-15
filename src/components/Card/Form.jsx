import React, { useState } from 'react';
import { v4 } from 'uuid'

const Form = ({ addNewTask }) => {

  const [task, setTask] = useState({
    title: '',
    user: '',
    date: '',
    time: '',
    descripcion: '',
  })
  const [error, setError] = useState(false);

  //Extraccion de valores
  const { title, user, date, time, descripcion } = task;

  //Funcion escucha cuando el usuario escribe
  const handleTask = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  //Funcion enviar formulario
  const sendTask = e => {
    e.preventDefault();

    //validacion de los campos
    if (title.trim() === '' || user.trim() === '' || date.trim() === '' || time.trim() === '' || descripcion.trim() === '') {
      setError(true)
      return;
    } 
    setError(false)

    //Asignacion de id
    task.id = v4();

    //Generar Task
    addNewTask(task);

    //Reiniciar Formulaio
    setTask({
      title: '',
      user: '',
      date: '',
      time: '',
      descripcion: '',
    })
  }


  const arrayInputs = [
    {
      id: "14234",
      name: "title",
      styles: "placeholder-slate-900/60 bg-slate-300 text-black w-3/4 h-12 rounded-lg px-2",
      type: "text",
      placeholder: "Titulo de la Tarea",
      funtion: handleTask,
      value: title
    },
    {
      id: "2343",
      name: "user",
      type: "text",
      styles: "placeholder-slate-900/60 bg-slate-300 text-black w-3/4 h-12 rounded-lg my-5 px-2",
      placeholder: "¿Aquien se la Asignas?",
      funtion: handleTask,
      value: user
    },
    {
      id: "35234",
      name: "date",
      type: "date",
      styles: "bg-slate-300 w-3/4 h-12 text-black rounded-lg px-2",
      placeholder: "",
      funtion: handleTask,
      value: date
    },
    {
      id: "45234",
      name: "time",
      type: "time",
      styles: "bg-slate-300 w-3/4 h-12 text-black rounded-lg my-5 px-2",
      placeholder: "",
      funtion: handleTask,
      value: time
    },
  ]


  return (
    <form onSubmit={sendTask} action="none" className={`flex flex-col items-center justify-start py-6 bg-gray-600/30 rounded-2xl overflow-hidden w-custom-width h-custom-height`}>
      <div className={`w-full h-1/5 flex flex-col justify-center items-center`}>
        {error ? <h2 className='text-red-700 uppercase'><strong>Todos los campos son requeridos</strong></h2> : null}
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