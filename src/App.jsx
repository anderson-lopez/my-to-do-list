import { useState } from 'react'
import Home from './components/Home/Home'
// import reactLogo from './assets/react.svg';
// import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`w-auto h-screen bg-gradient-to-r bg-black`}>
      <Home/>
    </div>
  )
}

export default App
