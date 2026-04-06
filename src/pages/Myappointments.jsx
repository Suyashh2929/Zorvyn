import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DocContext } from '../context/AppContext' // Repurposed as AssetContext

const MyAppointments = () => {
  const { screener: assets } = useContext(DocContext)
  const navigate = useNavigate()

  // Mocking 'My Positions' - In a real app, this would come from a 'UserContext'
  // If this array is empty, the 'Empty State' UI will trigger.
  const myPositions = assets.slice(0, 3); 

  return (
    <div className='pb-20'>
      {/* Page Header */}
      <div className='pt-10 pb-8 border-b border-white/5'>
        <h1 className='text-3xl font-black text-white tracking-tight'>Active Positions</h1>
        <p className='text-slate-500 text-sm mt-1'>Manage your open market exposures and real-time P/L.</p>
      </div>

      {myPositions.length > 0 ? (
        <div className='mt-8 space-y-6'>
          {myPositions.map((item, index) => (
            <div key={index} className='bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/[0.04] transition-all group'>
              
              {/* Asset Identity */}
              <div className='flex items-center gap-5 w-full md:w-auto'>
                <div className='w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors'>
                  <img className='w-10 grayscale group-hover:grayscale-0 transition-all' src={item.image} alt={item.name} />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white'>{item.name}</h3>
                  <p className='text-xs font-bold text-slate-500 uppercase tracking-widest'>{item.speciality}</p>
                  <div className='flex items-center gap-2 mt-2'>
                    <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
                    <p className='text-[10px] font-black text-emerald-500 uppercase'>Live Market</p>
                  </div>
                </div>
              </div>

              {/* Position Value & P/L */}
              <div className='flex flex-row md:flex-col justify-between w-full md:w-auto md:text-right gap-2 border-t md:border-t-0 border-white/5 pt-4 md:pt-0'>
                <div>
                  <p className='text-[10px] font-black text-slate-500 uppercase tracking-widest'>Current Value</p>
                  <p className='text-lg font-black text-white'>${(item.fees * 120).toLocaleString()}</p>
                </div>
                <div>
                  <p className='text-[10px] font-black text-slate-500 uppercase tracking-widest'>Profit / Loss</p>
                  <p className='text-sm font-bold text-emerald-400'>+ 14.25% (+$420.00)</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex items-center gap-3 w-full md:w-auto'>
                <button className='flex-1 md:flex-none bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl text-xs font-bold border border-white/10 transition-all'>
                  View Chart
                </button>
                <button 
                  onClick={() => navigate(`/appointment/${item._id}`)} 
                  className='flex-1 md:flex-none bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-[#050816] px-6 py-3 rounded-xl text-xs font-bold border border-red-500/20 transition-all'
                >
                  Close Position
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* ENHANCED EMPTY STATE */
        <div className='flex flex-col items-center justify-center h-[50vh] text-center space-y-6'>
          <div className='w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-dashed border-white/20'>
            <span className='text-3xl opacity-20'>📊</span>
          </div>
          <div className='space-y-2'>
            <h2 className='text-xl font-bold text-white'>No Active Positions</h2>
            <p className='text-slate-500 text-sm max-w-xs mx-auto'>
              Your portfolio is currently empty. Initialize a trade to start tracking your wealth.
            </p>
          </div>
          <button 
            onClick={() => navigate('/screener')} 
            className='bg-emerald-500 text-[#050816] px-10 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all'
          >
            Explore Markets
          </button>
        </div>
      )}
    </div>
  )
}

export default MyAppointments