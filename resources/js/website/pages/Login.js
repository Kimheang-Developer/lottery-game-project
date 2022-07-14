import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    let navigate = useNavigate();
    const [loginInput, setLogin] = useState({
        username: '',
        password: '',
        error_list: [],
    });

    const onInputChange = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: loginInput.username,
            password: loginInput.password
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/v1/login`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username)
                    navigate("/", { replace: true });
                } else if (res.data.status === 401) {
    
                } else {
                    setLogin({...loginInput, error_list: res.data.validation_errors})
                }
            });
        });
    }

    return (
        <>
            <div className='bg-gray-50 px-3 h-screen'>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="px-8 py-6 mt-4 text-left">
                        <h3 className="text-2xl font-bold text-center">Welcome Back!</h3>
                        <form onSubmit={loginSubmit} autoComplete="off">
                            <div className="mt-4">
                                <div>
                                    <label className="text-xs font-medium block">Username</label>
                                    <input type="text" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name='username' onChange={onInputChange} value={loginInput.username}/>
                                    <span className="mt-2 text-sm text-red-600 dark:text-red-500">{loginInput.error_list.username}</span>
                                </div>
                                <div className="mt-4">
                                    <label className="text-xs font-medium block">Password</label>
                                    <input type="password" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name='password' onChange={onInputChange} value={loginInput.password}/>
                                    <span className="mt-2 text-sm text-red-600 dark:text-red-500">{loginInput.error_list.password}</span>
                                </div>
                                <div className="flex items-baseline justify-between">
                                    {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
                                </div>
                                <div>
                                    <button type='submit' className="text-white font-medium text-sm ext-center bg-blue-600 rounded w-full px-5 py-2.5 mt-5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150 ease-in">Login</button>
                                </div>
                                <div className="flex items-center justify-center my-2">
                                    <p className='text-xs font-medium'>Don't have account? <Link to="/register" className="text-xs text-blue-600 hover:underline">create a new account</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login