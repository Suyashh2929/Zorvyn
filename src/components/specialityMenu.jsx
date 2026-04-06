import React from 'react'
import { specialityData } from '../assets/frontend/assets'
import { Link } from 'react-router-dom'

const MarketSectors = () => {
  return (
    <div className='py-12 px-6 lg:px-10 bg-slate-50/50 rounded-3xl border border-slate-100' id='specialty'>
      
      {/* Dashboard Section Header */}
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10'>
        <div>
          <h2 className='text-2xl font-extrabold text-slate-900 tracking-tight'>Market Sectors</h2>
          <p className='text-slate-200 text-sm mt-1 font-medium'>Live industry performance and volume distribution.</p>
        </div>
        <button className='text-xs font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all'>
          CUSTOMIZE VIEW
        </button>
      </div>

      {/* Enhanced Horizontal Carousel */}
      <div className='flex items-center gap-5 overflow-x-auto pb-6 no-scrollbar snap-x'>
        {specialityData.map((item, index) => (
          <Link 
            key={index}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
           
            className='flex-shrink-0 snap-start group'
          >
            <div className='w-40 sm:w-48 bg-white border border-slate-200 p-5 rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 relative overflow-hidden'>
              
              {/* Dynamic Market Badge (Mock Data) */}
              <div className='absolute top-3 right-3'>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${index % 2 === 0 ? 'text-emerald-600 bg-emerald-50' : 'text-amber-600 bg-amber-50'}`}>
                  {index % 2 === 0 ? '↑ 1.4%' : '↓ 0.8%'}
                </span>
              </div>

              {/* Icon / Brand Identity */}
              <div className='w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/5'>
                <img 
                  className='w-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300' 
                  src={item.image} 
                  alt={item.speciality} 
                />
              </div>
              
              {/* Sector Info */}
              <div className='space-y-1'>
                <p className='text-sm font-bold text-slate-900 group-hover:text-primary transition-colors uppercase tracking-tight'>
                  {item.speciality}
                </p>
                <div className='flex items-center gap-2'>
                  <div className='h-1 w-full bg-slate-100 rounded-full overflow-hidden'>
                    <div className='h-full bg-slate-300 w-2/3 group-hover:bg-primary transition-all duration-500'></div>
                  </div>
                  <span className='text-[10px] font-bold text-slate-400'>VOL</span>
                </div>
              </div>

              {/* Hover "Trade Now" Indicator */}
              <div className='mt-4 flex items-center text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity'>
                EXPLORE SECTOR →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MarketSectors