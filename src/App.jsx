import { useState } from 'react'
import Register from './Register'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from "styled-components";
import Login from './Login';


function App() {
 
  return (
    <>
    <main className='App'>
    <BrowserRouter>
<Nav />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
   
    </BrowserRouter>
    </main>
  </>
  );
}

export default App
