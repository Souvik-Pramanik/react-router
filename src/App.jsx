import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Service  from './components/Service'
import Contact from './components/Contact'
import Skills from './components/Skills'
import UI_UX from './components/Ui_ux'
import Frontend from './components/Frontend'
import Backend from './components/Backend'
import Database from './components/database'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <header>    
        <div className='logo'>
          <h1>Coding Lab.</h1>
        </div>
          <div className='menu'>
            <ul>
              <Router>
                  <Link to = "/">Home</Link>
                  <Link to ="/about">About Us</Link>
                  <Link to ="/service">Services</Link>
                  <Link to ="/contact">Contact Us</Link>
                  <Link to ="/skills">Skills</Link>
                <Routes>
                    <Route path='/'element={<Home/>}/>
                    <Route path='/about'element={<About/>}/>
                    <Route path='/service'element={<Service/>}/>
                    <Route path ='/contact'element={<Contact/>}/>
                    <Route path ='/skills'element={<Skills/>}>
                    <Route path ='/skills/design'element={<UI_UX/>}/>
                    <Route path ='/skills/webfrontend'element={<Frontend/>}/>
                    <Route path='/skills/webbackend'element={<Backend/>}/>
                    <Route path='/skills/database'element={<Database/>}/>
                      </Route>
                </Routes>
              </Router>
            </ul>
          </div>
      </header>

      
    </>
  )
}

export default App
