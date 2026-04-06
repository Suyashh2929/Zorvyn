import React from 'react'
import { assets } from '../assets/frontend/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    const currentYear = new Date().getFullYear()

    const handleNav = (path) => {
        navigate(path)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className='bg-transparent border-t border-white/5 pt-10 md:pt-12 pb-8 px-6 md:px-14'>
            <div className='max-w-7xl mx-auto'>
                
                {/* Main Footer Grid */}
                {/* Change: grid-cols-2 on mobile for the link sections */}
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 mb-10'>
                    
                    {/* Brand Column - Spans 2 columns on mobile for centering */}
                    <div className='col-span-2 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left'>
                        <img 
                            onClick={() => handleNav('/')} 
                            className='mb-4 h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity invert' 
                            src={assets.main_logo} 
                            alt="Fintech Logo" 
                        />
                        <p className='text-slate-500 leading-relaxed text-[11px] md:text-xs md:w-4/5 max-w-sm'>
                            Institutional-grade tools for the modern investor. 
                            Transparency, performance, and world-class security.
                        </p>
                        <div className='flex gap-3 mt-5'>
                            {['𝕏', 'in', 'f', 'ig'].map(icon => (
                                <span key={icon} className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold text-slate-400 cursor-pointer hover:bg-emerald-500 hover:text-[#050816] transition-all'>
                                    {icon}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Products Column */}
                    <div className='flex flex-col items-start'>
                        <h4 className='text-white font-bold mb-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em]'>Products</h4>
                        <ul className='flex flex-col gap-2.5 text-slate-500 text-[11px] md:text-xs'>
                            <li className='hover:text-emerald-400 cursor-pointer transition-colors'>Stock Trading</li>
                            <li className='hover:text-emerald-400 cursor-pointer transition-colors'>Crypto Assets</li>
                            <li className='hover:text-emerald-400 cursor-pointer transition-colors'>Fixed Deposits</li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className='flex flex-col items-start'>
                        <h4 className='text-white font-bold mb-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em]'>Company</h4>
                        <ul className='flex flex-col gap-2.5 text-slate-500 text-[11px] md:text-xs'>
                            <li onClick={() => handleNav('/about')} className='hover:text-emerald-400 cursor-pointer transition-colors'>About Us</li>
                            <li onClick={() => handleNav('/contact')} className='hover:text-emerald-400 cursor-pointer transition-colors'>Contact</li>
                            <li className='hover:text-emerald-400 cursor-pointer transition-colors'>Careers</li>
                        </ul>
                    </div>

                    {/* Legal Column - Stacks on mobile or fits if space allows */}
                    <div className='flex flex-col items-start col-span-2 sm:col-span-1'>
                        <h4 className='text-white font-bold mb-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em]'>Legal</h4>
                        <ul className='flex flex-col gap-2.5 text-slate-500 text-[11px] md:text-xs'>
                            <li className='hover:text-emerald-400 cursor-pointer transition-colors'>Privacy Policy</li>
                            <li className='hover:text-emerald-400 cursor-pointer transition-colors'>Security</li>
                            <li className='hover:text-emerald-400 cursor-pointer transition-colors'>Terms</li>
                        </ul>
                    </div>
                </div>

                {/* Regulatory Disclosure */}
                <div className='border-t border-white/5 pt-6 text-center md:text-left'>
                    <p className='text-[10px] text-slate-600 leading-relaxed mb-6 italic'>
                        Investment services provided by ZORVYN Finance LLC. Trading involves significant risk of loss. 
                        Past performance is not indicative of future results. View our <span className='text-emerald-500/80 underline cursor-pointer'>Risk Disclosure</span>.
                    </p>
                    
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-[10px] text-slate-500 font-medium'>
                            © {currentYear} ZORVYN Finance.
                        </p>
                        <div className='flex gap-4 opacity-50'>
                            <p className='text-[9px] md:text-[10px] text-slate-600 font-bold tracking-widest'>SEC REGISTERED</p>
                            <p className='text-[9px] md:text-[10px] text-slate-600 font-bold tracking-widest'>SIPC MEMBER</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer