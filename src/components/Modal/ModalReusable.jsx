import React from 'react'

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
      <div className={`bg-white`} >
        <div>
          {
            isTitle &&
            <h1 onClick={setStateModal(!stateModal)}>Soy el modal de la tarea Nº: {title}</h1>
          }
          <div>
          </div>
          {children}
        </div>
      </div>
    : null
  )
}

export default ModalReusable