import { useState } from 'react'
import Home from './components/Home/Home'
// import reactLogo from './assets/react.svg';
// import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`w-auto bg-gradient-to-r bg-gray-200`}>
      <Home/>
    </div>
  )
}

export default App
