import React from 'react'
import Header from '../../components/Header'

const ChangePassword = () => {
    return (
        <>
            <Header title="Change Password" redirect="/set-up"/>
            <div className='bg-gray-50 py-3 px-3 h-[calc(100vh-61px)]'>
                <form autoComplete='off'>
                    <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                        <label className='text-xs font-medium'>Current Password</label>
                        <input type="password" className='bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none'/>
                    </div>
                    <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                        <label className='text-xs font-medium'>New Password</label>
                        <input type="password" className='bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none'/>
                    </div>
                    <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                        <label className='text-xs font-medium'>Confirm Password</label>
                        <input type="password" className='bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none'/>
                    </div>
                    <button type="submit" className="text-white font-medium text-sm ext-center bg-green-600 rounded w-full px-5 py-2.5 mt-5 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300">Change</button>
                </form>
            </div>
        </>
    )
}

export default ChangePassword