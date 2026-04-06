import React, { useState } from 'react'
import { assets } from '../assets/frontend/assets'

const Transactions = () => {
  const transactionData = [
    { id: '#TRX-9902', name: 'Nvidia Corp', ticker: 'NVDA', date: 'Oct 24, 2025', amount: '+ $1,240.50', status: 'Completed', type: 'Buy' },
    { id: '#TRX-9841', name: 'Bitcoin Network', ticker: 'BTC', date: 'Oct 22, 2025', amount: '- $450.00', status: 'Pending', type: 'Withdrawal' },
    { id: '#TRX-9712', name: 'Apple Inc', ticker: 'AAPL', date: 'Oct 20, 2025', amount: '+ $2,100.00', status: 'Completed', type: 'Buy' },
    { id: '#TRX-9601', name: 'Portfolio Rebalance', ticker: 'ETF', date: 'Oct 18, 2025', amount: '- $150.25', status: 'Failed', type: 'System' },
  ]

  return (
    <div className='pb-20'>
      {/* Page Header - Fixed Mobile Alignment */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-10 border-b border-white/5 pb-8'>
        <div>
          <h1 className='text-3xl font-black text-white tracking-tight'>Transaction History</h1>
          <p className='text-slate-400 text-sm mt-1'>Monitor your global asset movements.</p>
        </div>
        <div className='flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10 w-full md:w-auto'>
          <button className='flex-1 md:flex-none px-6 py-2.5 bg-emerald-500 text-[#050816] rounded-lg text-xs font-bold shadow-lg shadow-emerald-500/20'>All Time</button>
          <button className='flex-1 md:flex-none px-6 py-2.5 text-slate-400 hover:text-white rounded-lg text-xs font-bold transition-all'>Monthly</button>
        </div>
      </div>

      {/* Quick Stats - Stacks 1 col on mobile, 3 on laptop */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-10'>
        <div className='bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl'>
          <p className='text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]'>Total Volume</p>
          <h3 className='text-2xl font-black text-white mt-2'>$42,650.00</h3>
          <p className='text-emerald-400 text-[10px] font-bold mt-1 flex items-center gap-1'>
            <span className='text-xs'>↑</span> 12.5% vs last month
          </p>
        </div>
        <div className='bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl'>
          <p className='text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]'>Pending</p>
          <h3 className='text-2xl font-black text-white mt-2'>$1,240.00</h3>
          <p className='text-amber-400 text-[10px] font-bold mt-1'>2 clearances in progress</p>
        </div>
        <div className='hidden lg:block bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl sm:col-span-2 lg:col-span-1'>
          <p className='text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]'>Average Yield</p>
          <h3 className='text-2xl font-black text-white mt-2'>8.4%</h3>
          <p className='text-slate-400 text-[10px] font-bold mt-1'>Institutional benchmark: 7.2%</p>
        </div>
      </div>

      {/* Transactions Table - Mobile Optimized */}
      <div className='bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden'>
        <div className='overflow-x-auto scrollbar-hide'>
          <table className='w-full text-left border-collapse min-w-[700px] md:min-w-full'>
            <thead>
              <tr className='border-b border-white/5 bg-white/[0.02]'>
                <th className='px-4 sm:px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest'>Asset</th>
                <th className='px-4 sm:px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest'>Date</th>
                <th className='px-4 sm:px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest'>Amount</th>
                <th className='hidden sm:table-cell px-4 sm:px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest'>Type</th>
                <th className='px-4 sm:px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right'>Status</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {transactionData.map((item, index) => (
                <tr key={index} className='border-b border-white/5 hover:bg-white/[0.03] transition-colors group'>
                  <td className='px-4 sm:px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 shrink-0 rounded-lg bg-white/5 flex items-center justify-center font-bold text-[10px] border border-white/10 text-emerald-500'>
                        {item.ticker}
                      </div>
                      <div className='truncate max-w-[120px] sm:max-w-none'>
                        <p className='text-white font-bold text-xs sm:text-sm'>{item.name}</p>
                        <p className='text-[10px] text-slate-600 font-bold hidden sm:block'>{item.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 sm:px-6 py-4 text-slate-400 font-medium text-xs'>{item.date}</td>
                  <td className={`px-4 sm:px-6 py-4 font-black text-xs sm:text-sm ${item.amount.startsWith('+') ? 'text-emerald-400' : 'text-white'}`}>
                    {item.amount}
                  </td>
                  <td className='hidden sm:table-cell px-4 sm:px-6 py-4'>
                    <span className='px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold text-slate-400'>
                      {item.type}
                    </span>
                  </td>
                  <td className='px-4 sm:px-6 py-4 text-right'>
                    <span className={`inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                      item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 
                      item.status === 'Pending' ? 'bg-amber-500/10 text-amber-500' : 
                      'bg-red-500/10 text-red-500'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${
                        item.status === 'Completed' ? 'bg-emerald-500' : 
                        item.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
                      }`}></span>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination */}
      <div className='mt-10 flex justify-center'>
        <button className='text-[10px] font-black text-slate-500 hover:text-emerald-500 transition-all tracking-[0.2em] border-b border-transparent hover:border-emerald-500 pb-1 uppercase'>
          Load More History
        </button>
      </div>
    </div>
  )
}

export default Transactions