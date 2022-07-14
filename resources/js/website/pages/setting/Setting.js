import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { MdChevronRight } from "react-icons/md";

const Setting = () => {
    return (
        <>
            <Header title="Set Up" redirect="/mine"/>
            <div className='bg-gray-50 py-3 px-3 h-[calc(100vh-61px)]'>
                <div className='bg-white drop-shadow-sm flex items-start justify-center flex-col flex-nowrap w-full mt-5 px-3'>
                    <Link to="/basic-info" className='flex items-center justify-between py-3 border-b border-b-gray-100 w-full'>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Basic Data Settings</span>
                        <MdChevronRight/>
                    </Link>
                    <Link to="/change-password" className='flex items-center justify-between py-3 border-b border-b-gray-100 w-full'>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Password</span>
                        <MdChevronRight/>
                    </Link>
                    <Link to="/gift" className='flex items-center justify-between py-3 border-b border-b-gray-100 w-full'>
                        <span className='text-sm text-gray-800 font-medium ml-3'>General Settings</span>
                        <MdChevronRight/>
                    </Link>
                    <Link to="/comment" className='flex items-center justify-between py-3 border-b border-b-gray-100 w-full'>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Comments</span>
                        <MdChevronRight/>
                    </Link>
                    <Link to="/about-us" className='flex items-center justify-between py-3 w-full'>
                        <span className='text-sm text-gray-800 font-medium ml-3'>About Us</span>
                        <MdChevronRight/>
                    </Link>
                </div>

                <button type="button" className="text-white font-medium text-sm ext-center bg-red-600 rounded-full w-full px-5 py-2.5 mt-10 hover:bg-red700 focus:outline-none focus:ring-4 focus:ring-red-300">Logout</button>
            </div>
        </>
    )
}

export default Setting