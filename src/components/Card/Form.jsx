import React from 'react'

const Form = () => {
  return (
    <form action="none" className={`flex flex-col items-center justify-start py-6 bg-gray-600/30 rounded-2xl overflow-hidden w-custom-width h-custom-height`}>
      <div className={`w-full h-1/5  flex justify-center items-center`}>
        <h2 className={`text-4xl`}><strong>Crea una tarea</strong></h2>
      </div>
      <div className='w-full h-4/5 flex flex-col justify-start items-center'>
        <input className={` placeholder-slate-900/60 bg-slate-300 text-black w-3/4 h-12 rounded-lg px-2`} placeholder={`Titulo de la Tarea`} type="text" name="title" id="title" />
        <input className={` placeholder-slate-900/60 bg-slate-300 w-3/4 h-12 rounded-lg my-5 px-2`} placeholder={`¿Aquien se la Asignas?`} type="text" name="user" id="user" />
        <input className={` placeholder-slate-900/60 bg-slate-300 w-3/4 h-12 rounded-lg px-2`} type="date" name="date" id="date" />
        <textarea className={`placeholder-slate-900/60 bg-slate-300 w-3/4 h-24 my-5 rounded-lg p-2`} placeholder={`Descripcion`} name="Descripcion" id="" cols="20" rows="15"></textarea>
        <input className={`bg-slate-600  hover:bg-slate-800 cursor-pointer duration-300  w-3/4 h-12 rounded-lg p-2`} type="submit" value="Crear" />
      </div>
    </form>
  )
}

export default Form