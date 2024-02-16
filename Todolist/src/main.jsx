import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Service } from './components/Service.jsx'
import { Price } from './components/Price.jsx'
import { Contact } from './components/Contact.jsx'
import Task7 from './components/Task7.jsx'
import { Parent } from './components/Task8/Parent.jsx'
import ClassParent from './components/Task8/ClassParent.jsx'
import ClassCounter from './components/Task8/ClassCounter.jsx'
import Popup from './components/Task9/Popup.jsx'
// import List from './components/task10/List.jsx'
import List1 from './components/task10/List1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={    <App />}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/price' element={<Price/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route/>
  <Route/>
</Routes>
</BrowserRouter> */}
{/* <Task7/>  task date 13/02/2024 */}
{/* <Parent/> */}
{/* <ClassParent/> */}
{/* <ClassCounter/> */}
{/* <Popup/> */}
<List1/>

  </React.StrictMode>,
)
