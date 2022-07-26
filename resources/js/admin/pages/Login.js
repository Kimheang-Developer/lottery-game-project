import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
    let navigate = useNavigate();
    const [loginInput, setLogin] = useState({
        username: '',
        password: '',
        errorList: []
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value})
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            username: loginInput.username,
            password: loginInput.password
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/admin/login`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token)
                    localStorage.setItem('auth_username', res.data.username)
                    navigate("/admin/dashboard");
                }  else if (res.data.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                } else {
                    setLogin({...loginInput, errorList: res.data.validation_erros})
                }
            })
        });
    }

    return (
        <>
            <div className='h-screen bg-gray-50 flex justify-center items-center w-full'>
                <form autoComplete='off' onSubmit={handleLogin}>
                    <div className='bg-white px-10 py-8 rounded-none w-screen shadow-md max-w-sm'>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-3">Username</label>
                            <input type="text" className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" value={loginInput.username} onChange={handleInput} autoFocus/>
                            <span className='text-red-500 font-bold text-xs mt-2'>{loginInput.errorList.username}</span>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-3">Password</label>
                            <input type="password" className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" value={loginInput.password} onChange={handleInput}/>
                            <span className='text-red-500 font-bold text-xs mt-2'>{loginInput.errorList.password}</span>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login