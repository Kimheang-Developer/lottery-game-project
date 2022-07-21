import React, { useState } from 'react'

const Login = () => {


    return (
        <>
            <div className='w-screen h-screen flex justify-center items-center'>
                <form className='p-10 bg-white rounded-xl space-y-5' autoComplete='off'>
                    <div className="flex flex-col space-y-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" autoFocus/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                        <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password"/>
                    </div>
                    <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login