import React, { useState } from 'react'
import { assets } from '../assets/frontend/assets'

const PaymentAccounts = () => {
  return (
    <div className='pb-20 px-0 sm:px-2'>
      {/* Header Section - Responsive Padding */}
      <div className='pt-6 md:pt-10 pb-6 md:pb-8 border-b border-white/5'>
        <h1 className='text-2xl md:text-3xl font-black text-white tracking-tight'>Payment Accounts</h1>
        <p className='text-slate-500 text-xs md:text-sm mt-1 font-medium'>Manage funding sources and gateways.</p>
      </div>

      {/* Main Grid: Gaps reduced for mobile (gap-6) and expanded for laptop (lg:gap-10) */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-8 md:mt-10'>
        
        {/* Left Column: Linked Cards */}
        <div className='lg:col-span-2 space-y-6 md:space-y-8'>
          <h2 className='text-[10px] md:text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em] ml-1'>Active Cards</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            {/* Visa Card Mockup - Optimized Padding */}
            <div className='bg-gradient-to-br from-slate-800 to-slate-950 p-5 md:p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full'></div>
              <div className='flex justify-between items-start mb-10 md:mb-12'>
                <p className='text-[10px] font-bold text-slate-400'>Virtual Debit</p>
                <img className='w-8 md:w-10 opacity-80' src={assets.logo} alt="Chip" />
              </div>
              <p className='text-lg md:text-xl font-bold text-white tracking-[0.2em] mb-4'>**** **** **** 8829</p>
              <div className='flex justify-between items-end'>
                <div>
                  <p className='text-[9px] text-slate-500 font-bold uppercase'>Expiry</p>
                  <p className='text-xs text-white font-bold'>05/29</p>
                </div>
                <div className='bg-white/10 px-3 py-1 rounded-lg border border-white/10'>
                  <p className='text-[10px] font-black text-white'>VISA</p>
                </div>
              </div>
            </div>

            {/* Add New Card CTA - Fixed height for better mobile touch target */}
            <div className='border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 min-h-[160px] hover:border-emerald-500/50 hover:bg-emerald-500/[0.02] transition-all group cursor-pointer'>
              <div className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform'>
                <span className='text-xl text-slate-500 group-hover:text-emerald-500'>+</span>
              </div>
              <p className='text-[10px] font-bold text-slate-500 group-hover:text-emerald-500 uppercase tracking-widest'>Link New Card</p>
            </div>
          </div>

          {/* Institutional Gateways */}
          <h2 className='text-[10px] md:text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em] ml-1 pt-2'>Connected Gateways</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
            <div className='flex items-center justify-between p-4 md:p-5 bg-white/[0.02] border border-white/5 rounded-2xl'>
              <div className='flex items-center gap-3 md:gap-4'>
                <img className='w-12 md:w-16 grayscale opacity-60' src={assets.stripe_logo} alt="Stripe" />
                <p className='text-[10px] md:text-xs font-bold text-slate-300 uppercase'>Stripe</p>
              </div>
              <span className='text-[9px] md:text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded'>ACTIVE</span>
            </div>
            <div className='flex items-center justify-between p-4 md:p-5 bg-white/[0.02] border border-white/5 rounded-2xl'>
              <div className='flex items-center gap-3 md:gap-4'>
                <img className='w-16 md:w-20 grayscale opacity-60' src={assets.razorpay_logo} alt="Razorpay" />
                <p className='text-[10px] md:text-xs font-bold text-slate-300 uppercase'>UPI</p>
              </div>
              <span className='text-[9px] md:text-[10px] font-black text-slate-500 bg-white/5 px-2 py-0.5 rounded'>LINKED</span>
            </div>
          </div>
        </div>

        {/* Right Column: Wallet Summary (Stacks below on mobile) */}
        <div className='space-y-6 lg:sticky lg:top-24'>
          <h2 className='text-[10px] md:text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em]'>Wallet Summary</h2>
          <div className='bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl'>
            <div>
              <p className='text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest'>Withdrawable</p>
              <h3 className='text-3xl md:text-4xl font-black text-white mt-1'>$42,650.00</h3>
            </div>
            
            <div className='space-y-3 pt-4 border-t border-white/5'>
              <div className='flex justify-between text-[10px] md:text-xs font-bold'>
                <span className='text-slate-500 uppercase'>Daily Limit</span>
                <span className='text-white'>20% used</span>
              </div>
              <div className='w-full h-1.5 bg-white/5 rounded-full overflow-hidden'>
                <div className='bg-emerald-500 w-1/5 h-full rounded-full shadow-[0_0_8px_#10b981]'></div>
              </div>
            </div>

            <button className='w-full bg-emerald-500 hover:bg-emerald-400 text-[#050816] py-3.5 md:py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-emerald-500/20'>
              Withdraw Funds
            </button>
          </div>

          {/* Support Section - Simplified for mobile */}
          <div className='bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-5 md:p-6'>
            <p className='text-xs font-bold text-white mb-1'>Need higher limits?</p>
            <p className='text-[10px] md:text-[11px] text-slate-400 leading-relaxed'>Upgrade to Institutional Pro for unlimited volume.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PaymentAccounts