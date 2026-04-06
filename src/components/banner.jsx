import React from 'react'
import { assets } from '../assets/frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='flex bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl px-8 sm:px-12 md:px-16 lg:px-20 my-24 md:mx-10 relative overflow-hidden shadow-2xl border border-white/5'>
            
            {/* Background Decorative Glow */}
            <div className='absolute top-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full'></div>

            {/* Left Content Section */}
            <div className='flex-1 py-12 sm:py-16 md:py-20 lg:py-24 z-10'>
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight'>
                    <p>Ready to automate </p>
                    <p className='mt-2 text-primary'>your financial future?</p>
                </div>
                
                <p className='text-slate-400 mt-6 text-sm sm:text-base max-w-md font-medium'>
                    Join 2+ million users who trust our institutional-grade security and AI-driven portfolio management.
                </p>

                <div className='flex flex-wrap gap-4 mt-10'>
                    <button 
                        onClick={() => { navigate('/login'); window.scrollTo(0, 0) }} 
                        className='bg-white text-slate-900 text-sm sm:text-base font-bold px-10 py-4 rounded-xl hover:bg-slate-100 transform hover:scale-105 transition-all shadow-lg shadow-white/10'
                    > 
                        Open Free Account
                    </button>
                    <button className='backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm sm:text-base font-bold px-10 py-4 rounded-xl hover:bg-white/20 transition-all'>
                        Contact Sales
                    </button>
                </div>
            </div>

            {/* Right Illustration Section */}
            <div className='hidden md:block md:w-1/2 lg:w-[420px] relative z-10'>
                <img 
                    className='w-full absolute bottom-0 right-0 max-w-sm drop-shadow-[0_-10px_40px_rgba(255,255,255,0.1)]' 
                    src={assets.appointment_img} // Recommend swapping for a Credit Card or Phone App mockup
                    alt="Fintech Interface Preview" 
                />
            </div>
            
        </div>
    )
}

export default Banner