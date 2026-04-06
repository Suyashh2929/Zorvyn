import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState("Sign Up")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const submitHandler = async (event) => {
    event.preventDefault()
    // Logic for auth would go here
    console.log("Form Submitted", { name, email, password })
  }

  return (
    <form onSubmit={submitHandler} className='min-h-[80vh] flex items-center justify-center relative'>
      
      {/* Background Decorative Glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none'></div>

      <div className='flex flex-col gap-6 m-auto items-start p-10 min-w-[360px] sm:min-w-[420px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl text-slate-300 shadow-2xl relative z-10'>
        
        {/* Header Section */}
        <div className='w-full space-y-1'>
          <h2 className='text-3xl font-black text-white tracking-tight'>
            {state === 'Sign Up' ? "Create Account" : "Secure Login"}
          </h2>
          <p className='text-slate-400 text-xs font-medium'>
            Please {state === 'Sign Up' ? "register" : "sign in"} to manage your global assets.
          </p>
        </div>

        {/* Inputs Section */}
        <div className='w-full space-y-4'>
          {state === 'Sign Up' && (
            <div className='w-full group'>
              <p className='text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1 transition-colors group-focus-within:text-emerald-500'>
                Full Name
              </p>
              <input 
                className='bg-white/5 border border-white/10 rounded-xl w-full p-3 text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600' 
                type="text" 
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                required 
              />
            </div>
          )}

          <div className='w-full group'>
            <p className='text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1 transition-colors group-focus-within:text-emerald-500'>
              Institutional Email
            </p>
            <input 
              className='bg-white/5 border border-white/10 rounded-xl w-full p-3 text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600' 
              type="email" 
              placeholder="name@company.com"
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              required 
            />
          </div>

          <div className='w-full group'>
            <div className='flex justify-between items-center mb-1.5 ml-1'>
              <p className='text-[10px] font-bold text-slate-500 uppercase tracking-widest transition-colors group-focus-within:text-emerald-500'>
                Access Key
              </p>
              {state === 'Login' && <span className='text-[10px] text-emerald-500 font-bold cursor-pointer hover:underline'>Forgot?</span>}
            </div>
            <input 
              className='bg-white/5 border border-white/10 rounded-xl w-full p-3 text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600' 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              required 
            />
          </div>
        </div>

        {/* Action Button */}
        <button 
          type="submit"
          className='bg-emerald-500 hover:bg-emerald-400 text-[#050816] w-full py-4 rounded-xl text-sm font-black transition-all transform active:scale-95 shadow-lg shadow-emerald-500/20 mt-2'
        >
          {state === 'Sign Up' ? "INITIALIZE ACCOUNT" : "AUTHORIZE ACCESS"}
        </button>

        {/* Toggle State */}
        <div className='w-full text-center pt-2'>
          {state === 'Sign Up' ? (
            <p className='text-xs text-slate-500 font-medium'>
              Existing user? <span onClick={() => setState('Login')} className='text-emerald-500 font-bold cursor-pointer hover:underline'>Login here</span>
            </p>
          ) : (
            <p className='text-xs text-slate-500 font-medium'>
              New to Slotter? <span onClick={() => setState('Sign Up')} className='text-emerald-500 font-bold cursor-pointer hover:underline'>Create institutional account</span>
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

export default Login