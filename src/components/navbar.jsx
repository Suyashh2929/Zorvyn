import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/frontend/assets'

function Navbar() {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  const navItems = [
    { name: 'DASHBOARD', path: '/' },
    { name: 'TRANSACTIONS', path: '/screener' },
    { name: 'ANALYTICS', path: '/about' },
    { name: 'ACCOUNTS', path: '/contact' },
  ]

  return (
    <nav className='w-full bg-[#050816]/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-[100]'>
      {/* Internal Wrapper: Fixed margins for laptop, smaller for mobile */}
      <div className='mx-4 sm:mx-[10%] flex items-center justify-between py-3 md:py-4 relative'>
        
        {/* LEFT: Logo - Responsive height */}
        <div className='flex items-center'>
          <img 
            onClick={() => navigate('/')} 
            className='h-8 sm:h-10 md:h-12 w-auto cursor-pointer hover:scale-105 transition-transform duration-300' 
            src={assets.main_logo} 
            alt="Fintech Logo" 
          />
        </div>

        {/* MIDDLE: Centered Navigation (Hidden on Mobile) */}
        <ul className='hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 xl:gap-10 font-bold text-[11px] tracking-[0.2em]'>
          {navItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              className={({ isActive }) => 
                `relative py-2 transition-all duration-300 hover:text-emerald-400 ${
                  isActive ? 'text-emerald-500' : 'text-slate-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <li>{item.name}</li>
                  {isActive && (
                    <div className='absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_12px_#10b981] rounded-full' />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </ul>

        {/* RIGHT: Actions (Search, Notif, Profile) */}
        <div className='flex items-center gap-3 sm:gap-6'>
          
          {/* Search Bar (Hidden on Mobile) */}
          <div className='hidden xl:flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl w-40 focus-within:w-56 focus-within:border-emerald-500/50 transition-all duration-500'>
            <span className='text-xs'>🔍︎</span>
            <input 
              type="text" 
              placeholder="Search..." 
              className='bg-transparent border-none outline-none text-xs ml-2 w-full text-white placeholder:text-slate-500'
            />
          </div>

          {/* Notification Icon - Reduced size for mobile */}
          <div className='relative cursor-pointer text-base sm:text-lg group/notif p-2 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10'>
            <span className='text-slate-300 group-hover/notif:text-white'>⩍</span>
            <span className='absolute top-2 right-2 flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-red-500 border border-[#050816]'></span>
            </span>
          </div>

          {token ? (
            <div className='flex items-center gap-3 sm:gap-4 cursor-pointer group relative'>
              <div className='relative'>
                <img className='w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-white/10 p-0.5 object-cover' src={assets.user96} alt="Profile" />
                <div className='absolute -bottom-0.5 -right-0.5 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-emerald-500 border-2 border-[#050816] rounded-full'></div>
              </div>

              {/* Profile Dropdown (Desktop only) */}
              <div className='absolute top-full right-0 pt-4 hidden group-hover:block'>
                <div className='min-w-52 bg-[#0f172a] shadow-2xl rounded-2xl border border-white/10 p-2 text-[11px] font-bold text-slate-300'>
                  <p onClick={() => navigate('/myprofile')} className='p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors'>My Profile</p>
                  <p onClick={() => navigate('/myappointments')} className='p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors'>Portfolio History</p>
                  <hr className='my-1 border-white/5' />
                  <p onClick={() => setToken(false)} className='p-3 hover:bg-red-500/10 text-red-500 rounded-xl cursor-pointer transition-colors'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className='bg-emerald-500 text-[#050816] px-4 sm:px-5 py-2 rounded-xl text-[10px] sm:text-[11px] font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20'>
              CONNECT
            </button>
          )}
          
          {/* Mobile Menu Icon */}
          <img onClick={() => setShowMenu(true)} className='w-6 lg:hidden cursor-pointer invert opacity-70 hover:opacity-100 transition-opacity' src={assets.menu_icon} alt="Menu" />
        </div>
      </div>

      {/* --- UPDATED MOBILE SIDEBAR --- */}
<div 
  className={`fixed inset-0 z-[999] bg-[#050816] transition-transform duration-500 transform ${
    showMenu ? 'translate-x-0' : 'translate-x-full'
  } lg:hidden flex flex-col`}
>
  {/* Header of Sidebar */}
  <div className='flex items-center justify-between border-b border-white/5 bg-black'>
    <img className='h-8 w-auto' src={assets.main_logo} alt="Logo" />
    <div 
      onClick={() => setShowMenu(false)} 
      className='w-10 h-10 flex items-center justify-center rounded-xl bg-black border border-white/10 text-white text-xl cursor-pointer hover:bg-red-500/20 transition-all'
    >
      ✕
    </div>
  </div>

  {/* Navigation Links */}
  <ul className='bg-black flex flex-col gap-2 p-6 mt-4'>
    {navItems.map((item) => (
      <NavLink 
        key={item.name} 
        onClick={() => setShowMenu(false)} 
        to={item.path} 
        className={({ isActive }) => `
          flex items-center justify-between p-4 rounded-2xl transition-all duration-300
          ${isActive 
            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
            : 'text-slate-300 hover:bg-black border border-transparent'
          }
        `}
      >
        <span className='text-xl font-black tracking-tight'>{item.name}</span>
        <span className='text-lg opacity-90'>→</span>
      </NavLink>
    ))}
  </ul>

  {/* Footer of Sidebar (Account Actions) */}
  <div className='mt-auto p-6 border-t border-white/5 bg-black'>
    {token ? (
      <div className='space-y-3'>
        <button 
          onClick={() => { navigate('/myprofile'); setShowMenu(false); }}
          className='w-full py-4 bg-white/5 text-white rounded-2xl font-bold text-sm border border-white/10'
        >
          VIEW PROFILE
        </button>
        <button 
          onClick={() => setToken(false)}
          className='w-full py-4 text-red-500 font-black text-xs tracking-widest'
        >
          SECURE LOGOUT
        </button>
      </div>
    ) : (
      <button
        onClick={() => { navigate('/login'); setShowMenu(false); }}
        className='w-full py-4 bg-emerald-500 text-[#050816] rounded-2xl font-black text-sm'
      >
        CONNECT WALLET
      </button>
    )}
  </div>

  {/* Decorative Glow inside sidebar to prevent "flat" look */}
  <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none -z-10'></div>
</div>
   
    </nav>
  )
}

export default Navbar