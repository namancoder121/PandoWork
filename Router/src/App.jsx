
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Router/Navbar'
import Home from './Components/Router/Home'
import About from './Components/Router/About'
import Services from './Components/Router/Services'
import PageNotFound from './Components/Router/PageNotFound'
import LifeCycle from './Components/Router/LifeCycle'

function App() {

  return (
   <>
   <Routes>
<Route path='/' element={<Navbar/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/Services' element={<Services/>}/>
<Route path='/lifeCycle' element={<LifeCycle/>}/>
<Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  )
}

export default App
