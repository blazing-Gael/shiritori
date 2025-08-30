import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [turn, setTurn] = useState(0);
  const [placeholder, setPlaceHolder] = useState("");

  return (
    <div class='bg-cyan-900 p-5 flex items-center justify-between gap-4'>
      <Card number="1" placeholder={placeholder} setPlaceHolder={setPlaceHolder} turn={turn} setTurn={setTurn}/>
      <Card number="2" placeholder={placeholder} setPlaceHolder={setPlaceHolder} turn={turn} setTurn={setTurn}/>
    </div>
  )
}

export default App
