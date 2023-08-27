
import './App.css'
import NewEmployee from './NewEmployee'
import MainSection from './components/MainSection'
import SideBar from './components/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <div><SideBar /><MainSection /></div> } ></Route>
        <Route path='/NewEmployee' element={ <NewEmployee /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
