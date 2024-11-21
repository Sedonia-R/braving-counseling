import React from 'react'
import {useEffect} from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Schedule from "./pages/Schedule"
import About from "./pages/About"
import Services from "./pages/Services"
import Resources from "./pages/Resources"
import FAQ from "./pages/FAQ"
import Contact from "./pages/Contact"
import NoPage from './pages/NoPage'
import Groups from './pages/Groups'

function App() {

  useEffect(() => {
    // 👇️ Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/resources" element={<Resources />}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/groups" element={<Groups />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App