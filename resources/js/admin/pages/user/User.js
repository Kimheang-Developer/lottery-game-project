import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('http://localhost:8000/api/user')
            const data = await res.json();
            //console.log(data)
            setUsers(data.data)
        }
        fetchUser();
    }, [])

    const deleteUser = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        });

        if(!isConfirm){
            return;
        }

        await axios.delete(`http://localhost:8000/api/user/${id}`).then(({data}) => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'User has been delete!',
            })
            fetchUser()
        }).catch(({response:{data}})=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='my-6 text-lg font-medium text-gray-700'>User List</h2>
                <Link to="new" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Add User
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </Link>
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">Name</th>
                            <th scope="col" className="py-3 px-6">Phone Number</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th scope="col" className="py-3 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 &&
                            users.map((user, key) => {
                            return (
                                <>
                                    <tr className="bg-white border-b hover:bg-gray-50" key={key}>
                                        <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                            {/* <img className="w-10 h-10 rounded-full" src="#" alt="Jese image"/> */}
                                            <div className="pl-3">
                                                <div className="text-base font-semibold">{user.name}</div>
                                            </div>  
                                        </td>
                                        <td className="py-4 px-6">{user.phone_number}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> {user.status}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center space-x-3">
                                                <Link to={`${user.id}/edit`} className="font-medium text-blue-600 hover:underline">Edit</Link>
                                                <button onClick={()=>deleteUser(user.id)} className="font-medium text-red-600 hover:underline">Remove</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User