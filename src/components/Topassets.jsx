import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DocContext } from '../context/AppContext' // In Fintech: AssetContext

const TopAssets = () => {
    const navigate = useNavigate()
    const { screener } = useContext(DocContext) // 'screener' contains asset data now

    return (
        <div className='flex flex-col items-center gap-6 my-12 text-slate-900'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold tracking-tight text-slate-100'>Top Performing Assets</h2>
                <p className='mt-2 text-slate-400 text-sm'>Institutional-grade performance tracking for your primary watchlist.</p>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-8 px-4 sm:px-0'>
                {screener.slice(0, 10).map((item, index) => (
                    <div 
                        key={index}
                         
                        className='group bg-white border border-slate-100 rounded-2xl p-5 cursor-pointer hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300'
                    >
                        {/* Header: Icon & Sparkline placeholder */}
                        <div className='flex justify-between items-start mb-4'>
                            <div className='w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors'>
                                <img className='w-7 opacity-80 group-hover:opacity-100' src={item.image} alt={item.name} />
                            </div>
                            <div className='text-right'>
                                <p className='text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md'>+4.2%</p>
                            </div>
                        </div>

                        {/* Body: Price & Name */}
                        <div className='space-y-1'>
                            <p className='text-slate-400 text-xs font-bold uppercase tracking-widest'>{item.speciality}</p>
                            <p className='text-slate-900 text-lg font-bold leading-tight'>{item.name}</p>
                        </div>

                        {/* Footer: Status Indicator */}
                        <div className='mt-4 pt-4 border-t border-slate-50 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></div>
                                <p className='text-xs font-semibold text-slate-500'>Live Price</p>
                            </div>
                            <p className='text-sm font-bold'>$42,069</p>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => {window.scrollTo(0, 0) }} 
                className='bg-slate-900 text-white hover:bg-slate-800 px-10 py-3.5 rounded-xl mt-10 font-bold text-sm transition-all shadow-lg shadow-slate-200'
            >
                View Full Market
            </button>
        </div>
    )
}

export default TopAssets