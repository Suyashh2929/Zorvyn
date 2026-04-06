import React from 'react'
import { assets } from '../assets/frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-white/[0.03] backdrop-blur-xl rounded-3xl px-6 md:px-10 lg:px-20 overflow-hidden shadow-2xl border border-white/10 relative mt-5'>
      
      {/* Decorative Background Glow for the whole container */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none'></div>

      {/* Left: Financial Overview */}
      <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-6 py-12 md:py-[8vw] z-10'>
        
        {/* Market Badge */}
        <div className='bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-4 py-1.5 rounded-full border border-emerald-500/20 tracking-[0.2em] uppercase'>
          MARKET IS OPEN • +2.4% TODAY
        </div>

        {/* Main Headline */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight tracking-tight'>
          Manage your wealth <br /> 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400'>
            without borders.
          </span>
        </h1>

        {/* Social Proof Section */}
        <div className='flex flex-col sm:flex-row items-center gap-4 text-slate-400 text-sm'>
          <img className='w-20 border-2 border-[#050816] rounded-full' src={assets.group_profiles} alt="Investors" />
          <p className='font-medium leading-relaxed'>
            Join <span className='text-white'>40k+ investors</span> using 
            <br className='hidden lg:block' /> real-time institutional analytics.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 mt-2 w-full sm:w-auto'>
          <button className='flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#050816] px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20'>
            Open Account
            <img className='w-4 brightness-0' src={assets.arrow_icon} alt="" />
          </button>
          
          <button className='bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold border border-white/10 backdrop-blur-md transition-all'>
            View Markets
          </button>
        </div>
      </div>

      {/* Right: Dashboard Preview */}
      <div className='md:w-1/2 relative flex items-end justify-center min-h-[250px] sm:min-h-[350px] md:min-h-0'>
        {/* Glow behind the image */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-500/20 blur-[100px] rounded-full'></div>
        
        <img 
          className='w-full max-w-[320px] sm:max-w-md md:max-w-none md:absolute -bottom-4 lg:bottom-0 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10' 
          src={assets.header_img} 
          alt="Fintech Interface" 
        />
      </div>

    </div>
  )
}

export default Header