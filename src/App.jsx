import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Screener from './pages/Screener'
import Login from './pages/Login'
import Myappointments from './pages/Myappointments'
import Myprofile from './pages/Myprofile'
import Appointments from './pages/Appointments'

import Navbar from './components/navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    /* The main dark background wrapper */
    <div className='bg-slate-800 min-h-screen text-slate-200 selection:bg-primary/30 relative overflow-hidden'>
      
      {/* Decorative Background Accents (Fintech Glow) */}
      <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none'></div>
      <div className='absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none'></div>

      {/* Main Content Container */}
      <Navbar/>
      <div className='mx-4 my-5 sm:mx-[10%] relative z-10'>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
         
          <Route path='/screener/:speciality' element={<Screener/>}/>
          <Route path='/screener' element={<Screener/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/myappointments' element={<Myappointments/>}/>
          <Route path='/myprofile' element={<Myprofile/>}/>
          <Route path='/appointment/:docId' element={<Appointments/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App