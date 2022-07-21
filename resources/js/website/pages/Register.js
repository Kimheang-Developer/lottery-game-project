import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Register = () => {
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registerSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/register', {
            name,
            phone,
            username,
            password,
        }).then(response => {
            console.log(response.data.user);
            if(response.data.user) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Register Success!',
                })
                navigate('/login');
            }
        }).catch(error => {
            console.log(error);
            
        });
    }

    return (
        <>
            <div className='bg-gray-50 min-h-screen'>
                <div className="">
                    <div className="px-8 py-6 text-left">
                        <h3 className="text-2xl font-bold text-center">Creat Account</h3>
                        <form onSubmit={registerSubmit} autoComplete='off'>
                            <div className="mt-4">
                                <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                                    <label className="text-xs font-medium block">Name</label>
                                    <input type="text" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name="name" value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                                    <label className="text-xs font-medium block">Phone Number</label>
                                    <input type="text" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name="phone_number" value={phone} onChange={e => setPhone(e.target.value)}/>
                                </div>
                                <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                                    <label className="text-xs font-medium block">Username</label>
                                    <input type="text" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                                </div>
                                <div className='flex items-start justify-center flex-col flex-wrap mb-2'>
                                    <label className="text-xs font-medium block">Password</label>
                                    <input type="password" className="text-sm bg-white border border-slate-200 rounded w-full h-10 px-2 mt-2 focus:outline-none" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
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