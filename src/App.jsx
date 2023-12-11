import Home from './Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ArticlePage from './Article'
import Header from './Header'
import Articles from './Articles'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/articles" element = {<Articles/>}/>
      <Route path = "/articles/:article_id" element = {<ArticlePage/>}/>
    </Routes>
    </>
  )
}

export default App
