import Login from './Login'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ArticlePage from './Article'
import Header from './Header'
import Articles from './Articles'
import Home from './Home'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/articles" element = {<Articles/>}/>
      <Route path = "/articles/:article_id" element = {<ArticlePage/>}/>
    </Routes>
    </>
  )
}

export default App
