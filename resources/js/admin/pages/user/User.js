import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/register`)
                console.log(res)
                const data = res.data
                setUsers(data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [])

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='my-6 text-lg font-medium text-gray-700'>User List</h2>
                <Link to="/new" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Add User
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </Link>
            </div>
            <div className='w-full overflow-hidden rounded-lg border'>
                <div className='w-full overflow-x-auto'>
                    <table className='w-full whitespace-no-wrap'>
                        <thead>
                            <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50'>
                                <th className='px-4 py-3'>Client</th>
                                <th className='px-4 py-3'>Amount</th>
                                <th className='px-4 py-3'>Status</th>
                                <th className='px-4 py-3'>Date</th>
                                <th className='px-4 py-3'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y'>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default User