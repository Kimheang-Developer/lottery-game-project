import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronBackOutline } from "react-icons/io5";

const Header = ({ title, redirect, visibility }) => {
    return (
        <>
            <div className={`bg-white border-b border-b-gray-100 py-4 max-w-none mx-auto px-2 ${visibility}`}>
                <div className="flex items-center justify-between">
                    <Link to={redirect}>
                        <IoChevronBackOutline className='text-gray-500'/>
                    </Link>
                    <h4 className="text-gray-800 text-lg font-medium text-center -tracking-wide">{ title }</h4>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Header