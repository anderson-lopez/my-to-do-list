import React from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div className={`w-full h-full flex flex-col items-center `}>
      <Header/>
      <Card/>
    </div>
  )
}

export default Home