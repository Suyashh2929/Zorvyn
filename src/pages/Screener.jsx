import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DocContext } from '../context/AppContext' // In Fintech: MarketContext

const MarketExplorer = () => {
  const { speciality: category } = useParams()
  const [showFilter, setShowFilter] = useState(false)
  const [filterAssets, setFilterAssets] = useState([])
  const { screener: assetsData } = useContext(DocContext)
  const navigate = useNavigate()

  // Defined Sectors for Fintech
  const sectors = [
    'Technology', 'Crypto', 'Energy', 'Healthcare', 'Finance', 'E-commerce'
  ]

  const applyFilter = () => {
    if (category) {
      setFilterAssets(assetsData.filter(asset => asset.speciality.toLowerCase() === category.toLowerCase()))
    } else {
      setFilterAssets(assetsData)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [assetsData, category])

  const handleFilterClick = (sector) => {
    if (category === sector) {
      navigate('/markets')
    } else {
      navigate(`/markets/${sector}`)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='max-w-7xl mx-auto pb-20'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-2xl font-bold text-slate-900'>Market Screener</h1>
        <p className='text-slate-500 text-sm'>Filter and analyze top-performing assets across global sectors.</p>
      </div>

      <div className='flex flex-col lg:flex-row items-start gap-8 mt-8'>
        
        {/* Mobile Filter Toggle */}
        <button 
          className={`lg:hidden w-full py-3 px-4 rounded-xl border font-bold text-sm transition-all ${showFilter ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'}`} 
          onClick={() => setShowFilter(prev => !prev)}
        >
          {showFilter ? 'Close Filters' : 'Adjust Filters'}
        </button>

        {/* Sidebar Filters */}
        <div className={`flex-col w-full lg:w-64 gap-3 ${showFilter ? 'flex' : 'hidden lg:flex'}`}>
          <p className='text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 pl-1'>Sectors</p>
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => handleFilterClick(sector)}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${category === sector 
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                : "bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Asset Grid */}
        <div className='flex-1 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {filterAssets.length > 0 ? filterAssets.map((item, index) => (
            <div 
              key={index}
              onClick={() => navigate(`/asset/${item._id}`)} 
              className='group bg-white border border-slate-100 rounded-2xl p-5 cursor-pointer hover:border-primary hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary/5 transition-colors'>
                  <img className='w-8 grayscale group-hover:grayscale-0 transition-all' src={item.image} alt={item.name} />
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <p className='text-slate-900 font-bold text-lg'>{item.name}</p>
                    <span className='text-[10px] font-black bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded uppercase tracking-tighter'>Live</span>
                  </div>
                  <p className='text-slate-400 text-xs font-medium'>{item.speciality}</p>
                </div>
              </div>

              {/* Data Visualization Placeholder */}
              <div className='bg-slate-50/50 rounded-xl p-4 flex items-center justify-between border border-slate-50'>
                <div>
                  <p className='text-[10px] text-slate-400 font-bold uppercase'>Price</p>
                  <p className='text-sm font-black text-slate-900'>$2,450.80</p>
                </div>
                <div className='text-right'>
                  <p className='text-[10px] text-slate-400 font-bold uppercase'>24h Change</p>
                  <p className='text-sm font-black text-emerald-500'>+5.24%</p>
                </div>
              </div>

              <div className='mt-5 flex items-center justify-between'>
                <div className='flex -space-x-2'>
                  {[1, 2, 3].map(i => (
                    <div key={i} className='w-6 h-6 rounded-full border-2 border-white bg-slate-200' />
                  ))}
                  <p className='text-[10px] text-slate-400 self-center ml-4'>+12k holders</p>
                </div>
                <button className='text-xs font-bold text-primary group-hover:underline'>Analyze →</button>
              </div>
            </div>
          )) : (
            <div className='col-span-full py-20 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200'>
              <p className='text-slate-400 font-medium'>No assets found in this sector.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MarketExplorer