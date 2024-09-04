import { useState } from 'react'
import Register from './Register'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='App'>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Register />} />
      </Routes> 
   
    </BrowserRouter>
    </main>
  </>
  );
}

export default App
