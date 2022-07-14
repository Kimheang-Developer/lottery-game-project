import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    let navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        name: '',
        phone_number: '',
        username: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            phone_number: registerInput.phone_number,
            username: registerInput.username,
            password: registerInput.password
        }

        try {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/api/v1/register`, data).then(res => {
                    if (res.data.status === 200) {
                        localStorage.setItem('auth_token', res.data.token);
                        localStorage.setItem('auth_name', res.data.username)
                        navigate("/", { replace: true });
                    } else {
                        setRegister({...registerInput, error_list: res.data.validation_errors})
                    }
                });
            });
        } catch (error) {
            console.log(error)
        } 
    }

    return (
        <>
            <div className='bg-gray-50 px-3 h-screen'>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="px-8 py-6 mt-4 text-left">
                        <h3 className="text-2xl font-bold text-center">Creat Account</h3>
                        <form onSubmit={registerSubmit} autoComplete='off'>
                            <div className="mt-4">
                                <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                                    <label className="text-xs font-medium block">Name</label>
                                    <input type="text" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name="name" onChange={handleInput} value={registerInput.name}/>
                                    <span className="mt-2 text-sm text-red-600 dark:text-red-500">{registerInput.error_list.name}</span>
                                </div>
                                <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                                    <label className="text-xs font-medium block">Phone Number</label>
                                    <input type="text" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name="phone_number" value={registerInput.phone_number} onChange={handleInput}/>
                                    <span className="mt-2 text-sm text-red-600 dark:text-red-500">{registerInput.error_list.phone_number}</span>
                                </div>
                                <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                                    <label className="text-xs font-medium block">Username</label>
                                    <input type="text" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name="username" value={registerInput.username} onChange={handleInput}/>
                                    <span className="mt-2 text-sm text-red-600 dark:text-red-500">{registerInput.error_list.username}</span>
                                </div>
                                <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                                    <label className="text-xs font-medium block">Password</label>
                                    <input type="password" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name="password" value={registerInput.password} onChange={handleInput}/>
                                    <span className="mt-2 text-sm text-red-600 dark:text-red-500">{registerInput.error_list.password}</span>
                                </div>
                                <div>
                                    <button type='submit' className="text-white font-medium text-sm ext-center bg-blue-600 rounded w-full px-5 py-2.5 mt-5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150 ease-in">Create Account</button>
                                </div>
                                <div className="flex items-center justify-center my-2">
                                    <p className='text-xs font-medium'>Already have a account? <Link to="/login" className="text-xs text-blue-600 hover:underline">Login</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register