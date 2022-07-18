import React, { useState } from 'react'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className='w-screen h-screen flex justify-center items-center'>
                <form className='p-10 bg-white rounded-xl space-y-5' autoComplete='off'>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-light" for="email">Username</label>
                        <input type="email" className="w-96 px-3 py-2 rounded-md border border-slate-400" name="username" autoFocus value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-light" for="password">Password</label>
                        <input type="password" className="w-96 px-3 py-2 rounded-md border border-slate-400" name="password"/>
                    </div>
                    <button class="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit">Login</button>
                    <p class="text-right"><a class="text-blue-600 text-sm font-light hover:underline" href="https://www.kindacode.com">Forget Password?</a></p>
                </form>
            </div>
        </>
    )
}

export default Login