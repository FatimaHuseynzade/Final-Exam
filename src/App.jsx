import React from 'react'
import '../src/assets/style.scss'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Add from '../pages/Add'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import Layout from '../layout/Layout'
import './App.css'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
