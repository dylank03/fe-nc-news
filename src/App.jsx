import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ArticlePage from './Article'

function App() {

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/articles/:article_id" element = {<ArticlePage/>}/>
    </Routes>
    </>
  )
}

export default App
