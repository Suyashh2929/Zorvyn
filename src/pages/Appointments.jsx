import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DocContext } from '../context/AppContext';
import { assets } from '../assets/frontend/assets';

const AssetDetail = () => {
  const { docId } = useParams();  
  const { doctors: assetsData } = useContext(DocContext);
  const navigate = useNavigate();

  const timeframes = ['1H', '4H', '1D', '1W', '1M', '1Y', 'ALL'];
  const [assetInfo, setAssetInfo] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState('1D');
  const [orderType, setOrderType] = useState('Market');

const fetchAssetInfo = () => {
    const info = assetsData?.find(item => item._id === docId);
    if (info) {
        setDocInfo(info); // or setAssetInfo depending on your state name
    }
};

  useEffect(() => {
    fetchAssetInfo();
  }, [assetsData, docId]);

  if (!assetInfo) {
    return <div className='h-screen flex items-center justify-center text-slate-500 font-bold tracking-widest animate-pulse'>INITIALIZING TERMINAL...</div>;
  }

  return (
    <div className='pb-20 pt-6 animate-in fade-in duration-700'>
      
      {/* 1. ASSET HEADER & QUICK STATS */}
      <div className='flex flex-col lg:flex-row gap-6 mb-8'>
        {/* Asset Identity Card */}
        <div className='lg:w-1/3 bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500'></div>
          
          <div className='flex items-center gap-6 mb-8'>
            <div className='w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl'>
              <img className='w-12 grayscale group-hover:grayscale-0 transition-all' src={assetInfo.image} alt={assetInfo.name} />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <h1 className='text-3xl font-black text-white tracking-tight'>{assetInfo.name}</h1>
                <img className='w-5' src={assets.verified_icon} alt="Verified Asset" />
              </div>
              <p className='text-emerald-500 font-black text-xs tracking-widest mt-1 uppercase'>{assetInfo.ticker || 'ASSET'} / USD</p>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='flex justify-between py-3 border-b border-white/5'>
              <p className='text-xs font-bold text-slate-500'>MARKET CAP</p>
              <p className='text-sm font-black text-white'>$1.24 Trillion</p>
            </div>
            <div className='flex justify-between py-3 border-b border-white/5'>
              <p className='text-xs font-bold text-slate-500'>24H VOLUME</p>
              <p className='text-sm font-black text-white'>$42.8 Billion</p>
            </div>
            <div className='flex justify-between py-3'>
              <p className='text-xs font-bold text-slate-500'>ASSET RATING</p>
              <span className='bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-500/20'>INSTITUTIONAL</span>
            </div>
          </div>
        </div>

        {/* Real-time Price & Mini-Chart Placeholder */}
        <div className='flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase'>Current Valuation</p>
              <h2 className='text-5xl font-black text-white mt-1'>${assetInfo.fees.toLocaleString()}<span className='text-xl text-slate-600'>.00</span></h2>
              <p className='text-emerald-400 font-bold text-sm mt-2'>+ 5.24% <span className='text-slate-500 font-medium ml-1'>Past 24h</span></p>
            </div>
            <div className='flex gap-2 bg-slate-950 p-1 rounded-xl border border-white/5'>
              {timeframes.map(tf => (
                <button 
                  key={tf} 
                  onClick={() => setSelectedInterval(tf)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${selectedInterval === tf ? 'bg-white/10 text-white shadow-lg' : 'text-slate-600 hover:text-slate-400'}`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Placeholder for TradingView or Recharts */}
          <div className='h-48 mt-8 border-b border-dashed border-white/10 flex items-end gap-1'>
            {[40, 70, 45, 90, 65, 80, 95, 100, 85, 90].map((h, i) => (
              <div key={i} style={{ height: `${h}%` }} className='flex-1 bg-emerald-500/20 rounded-t-sm hover:bg-emerald-500/50 transition-all'></div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. TRADE EXECUTION TERMINAL */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-8'>
          <h3 className='text-xs font-black text-slate-500 tracking-[0.2em] uppercase mb-6'>Fundamental Analysis</h3>
          <p className='text-slate-400 text-sm leading-relaxed mb-6'>{assetInfo.about}</p>
          
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            <div className='p-4 bg-white/5 rounded-2xl border border-white/5'>
              <p className='text-[10px] font-bold text-slate-500 uppercase mb-1'>PE Ratio</p>
              <p className='text-sm font-bold text-white'>24.5</p>
            </div>
            <div className='p-4 bg-white/5 rounded-2xl border border-white/5'>
              <p className='text-[10px] font-bold text-slate-500 uppercase mb-1'>Volatility</p>
              <p className='text-sm font-bold text-white'>Medium</p>
            </div>
            <div className='p-4 bg-white/5 rounded-2xl border border-white/5'>
              <p className='text-[10px] font-bold text-slate-500 uppercase mb-1'>Beta</p>
              <p className='text-sm font-bold text-white'>1.12</p>
            </div>
            <div className='p-4 bg-white/5 rounded-2xl border border-white/5'>
              <p className='text-[10px] font-bold text-slate-500 uppercase mb-1'>Yield</p>
              <p className='text-sm font-bold text-white'>1.4%</p>
            </div>
          </div>
        </div>

        {/* Order Entry */}
        <div className='bg-white/[0.03] border border-white/10 rounded-3xl p-8 shadow-2xl relative'>
          <div className='flex gap-4 mb-6 border-b border-white/5 pb-4'>
             <button className='flex-1 text-xs font-black text-emerald-500 border-b-2 border-emerald-500 pb-2'>BUY</button>
             <button className='flex-1 text-xs font-black text-slate-500 hover:text-white pb-2 transition-all'>SELL</button>
          </div>
          
          <div className='space-y-4'>
            <div className='flex flex-col gap-1.5'>
              <label className='text-[10px] font-bold text-slate-500 uppercase'>Order Type</label>
              <select className='bg-slate-950 border border-white/10 rounded-xl p-3 text-sm text-white outline-none'>
                <option>Market Order</option>
                <option>Limit Order</option>
                <option>Stop Loss</option>
              </select>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='text-[10px] font-bold text-slate-500 uppercase'>Amount (USD)</label>
              <input type="number" placeholder="0.00" className='bg-slate-950 border border-white/10 rounded-xl p-3 text-sm text-white outline-none focus:border-emerald-500/50' />
            </div>
          </div>

          <button className='w-full bg-emerald-500 hover:bg-emerald-400 text-[#050816] py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/20 mt-8 transition-all active:scale-95'>
            EXECUTE TRADE
          </button>
          <p className='text-[10px] text-slate-600 font-bold text-center mt-4 uppercase tracking-tighter'>Estimated Fee: $0.45</p>
        </div>
      </div>

      {/* Suggested Correlation */}
      <div className='mt-16'>
        <h3 className='text-[11px] font-black text-slate-500 tracking-[0.2em] uppercase mb-8 ml-2'>Correlated Assets</h3>

      </div>
    </div>
  );
};

export default AssetDetail;