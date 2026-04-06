import React, { useState } from "react";
import { assets } from "../assets/frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Suyash Sharma",
    image: assets.user96,
    email: "suyashh05@google.com",
    phone: "+91 8303117951",
    address: {
      line1: "201 Navi",
      line2: "Mumbai, India",
    },
    gender: "Male",
    dob: "2003-05-05",
    tier: "Professional",
    verified: true,
    uid: "TRD-88291-XS", // System Locked
    currency: "USD",
    riskTolerance: "Aggressive",
    twoFactor: true,
    lastLogin: "2026-04-03 14:22 UTC"
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-6xl pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. TOP IDENTITY BAR */}
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative group">
            <img className="w-24 h-24 rounded-2xl border-2 border-white/10 p-1 object-cover" src={userData.image} alt="Profile" />
            {isEdit && (
              <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <p className="text-[10px] font-black text-white">UPDATE</p>
              </div>
            )}
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3">
              {isEdit ? (
                <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-2xl font-black text-white outline-none" type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
              ) : (
                <h1 className="text-3xl font-black text-white tracking-tight">{userData.name}</h1>
              )}
              {userData.verified && <span className="bg-emerald-500 text-[#050816] text-[10px] font-black px-2 py-0.5 rounded shadow-[0_0_10px_#10b981]">VERIFIED</span>}
            </div>
            <p className="text-slate-500 text-xs font-bold mt-1 tracking-[0.2em] uppercase">UID: {userData.uid}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl text-right">
            <p className="text-[10px] font-black text-emerald-500 tracking-widest uppercase">Current Tier</p>
            <p className="text-white font-bold">{userData.tier}</p>
          </div>
          <p className="text-[10px] text-slate-500 font-medium italic">Last Login: {userData.lastLogin}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. CONTACT & LOCATION */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 space-y-6">
          <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Communication</h2>
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5 group">
              <label className="text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary">Email Address</label>
              <input className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-slate-300 outline-none cursor-not-allowed" type="text" value={userData.email} readOnly />
            </div>
            <div className="flex flex-col gap-1.5 group">
              <label className="text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-emerald-500">Phone Connection</label>
              <input className={`bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white outline-none focus:border-emerald-500/50 ${!isEdit && 'read-only:text-slate-400'}`} type="text" value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} readOnly={!isEdit} />
            </div>
            <div className="flex flex-col gap-1.5 group">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Registered Address</label>
              <div className="space-y-2">
                <input className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white w-full outline-none focus:border-emerald-500/50" type="text" value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value }}))} readOnly={!isEdit} />
                <input className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white w-full outline-none focus:border-emerald-500/50" type="text" value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value }}))} readOnly={!isEdit} />
              </div>
            </div>
          </div>
        </div>

        {/* 3. FINANCIAL & KYC DATA */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 space-y-6">
          <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Asset Configuration</h2>
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Risk Appetite</label>
              {isEdit ? (
                <select className="bg-[#0f172a] border border-white/10 rounded-xl p-3 text-sm text-white outline-none" value={userData.riskTolerance} onChange={(e) => setUserData(prev => ({ ...prev, riskTolerance: e.target.value }))}>
                  <option value="Conservative">Conservative</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Aggressive">Aggressive</option>
                </select>
              ) : (
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-sm font-bold text-emerald-400">{userData.riskTolerance}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Primary Currency</label>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <p className="text-sm font-bold text-white uppercase">{userData.currency}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Date of Incorporation (DOB)</label>
              <input className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white outline-none" type="date" value={userData.dob} onChange={e => setUserData(prev => ({...prev, dob: e.target.value}))} readOnly={!isEdit} />
            </div>
          </div>
        </div>

        {/* 4. SECURITY & SYSTEM */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 space-y-6">
          <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Security Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
              <div>
                <p className="text-[10px] font-black text-white uppercase">2FA Auth</p>
                <p className="text-[10px] text-emerald-500 font-bold">Enabled via Authenticator</p>
              </div>
              <div className="w-8 h-4 bg-emerald-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <div>
                <p className="text-[10px] font-black text-white uppercase">IP Access Control</p>
                <p className="text-[10px] text-slate-500 font-bold">Whitelist active</p>
              </div>
              <div className="w-8 h-4 bg-slate-700 rounded-full relative">
                <div className="absolute left-1 top-1 w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <button className="w-full py-3 text-[10px] font-black text-red-400 border border-red-400/20 rounded-xl hover:bg-red-400/5 transition-all">
                DEACTIVATE TRADING TERMINAL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="mt-12 flex justify-between items-center bg-white/[0.02] p-6 rounded-3xl border border-white/5">
        <p className="text-xs text-slate-500 font-medium">All sensitive data is encrypted with AES-256 standards.</p>
        <div className="flex gap-4">
          {isEdit ? (
            <>
              <button onClick={() => setIsEdit(false)} className="px-8 py-3 rounded-xl text-xs font-black text-slate-400 hover:text-white transition-all">CANCEL</button>
              <button onClick={() => setIsEdit(false)} className="bg-emerald-500 text-[#050816] px-10 py-3 rounded-xl font-black text-xs shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all">CONFIRM CHANGES</button>
            </>
          ) : (
            <button onClick={() => setIsEdit(true)} className="bg-white/10 hover:bg-white/20 text-white px-10 py-3 rounded-xl font-black text-xs transition-all">EDIT PROFILE</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;