import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Page/Layout'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'

export default function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
       <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
