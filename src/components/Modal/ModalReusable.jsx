import React from 'react';
import { CgCloseO } from "react-icons/cg";

const ModalReusable = ({
  children,
  stateModal,
  setStateModal,
  title,
  isTitle,
  isOverlay,
  modalPositionY,
  modalPositionX
}) => {


  return (
    stateModal
    ?
      <div className={`w-screen h-screen flex absolute bg-black/50 top-0 left-0 justify-center items-center`} >
        <div className={`w-2/6 h-4/6 bg-white rounded-lg relative`}>
          <button onClick={() => setStateModal(!stateModal)} className={` text-4xl bg-gray-600 hover:bg-slate-300 duration-300 p-1 rounded-md absolute top-6 right-6`}><CgCloseO/></button>
          <div className={`h-1/6   w-full bg-gray-800 flex justify-center items-center rounded-t-md`}>
            {isTitle ? <h2 className={`text-2xl text-center `}><strong>Quieres editar la tarea Nº: {title}</strong></h2> : null}
          </div>
          <div className={` bg-slate-400 h-5/6 w-full flex justify-center items-center`}>
            {children}
          </div>
        </div>
      </div>
    : null
  )
}

export default ModalReusable