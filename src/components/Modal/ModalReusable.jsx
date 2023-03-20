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
      <div className={`w-full h-screen flex fixed bg-black/50 top-0 left-0 justify-center items-center py-[2rem]`} >
        <div className={`min-w-[90%] sm:min-w-[30rem]  h-[30rem]  bg-white rounded-lg relative`}>
          <button onClick={() => setStateModal(!stateModal)} className={` text-4xl bg-gray-600 hover:bg-slate-300 duration-300 p-1 rounded-md absolute top-[1rem] right-[0.4rem]`}><CgCloseO/></button>
          <div className={`h-1/6   w-full bg-gray-700/60 flex justify-center items-center rounded-t-md`}>
            {isTitle ? <h2 className={`text-[1rem] text-black/60 text-center `}><strong>{title}</strong></h2> : null}
          </div>
          <div className={` bg-[#ffffff75] h-5/6 w-full flex justify-center items-center`}>
            {children}
          </div>
        </div>
      </div>
    : null
  )
}

export default ModalReusable