import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeInactive from '../assets/img/icon/inactive_home.png'
import HomeActive from '../assets/img/icon/active_home.png'
import GameInactive from '../assets/img/icon/inactive_game.png'
import GameActive from '../assets/img/icon/active_game.png'
import GiftInactive from '../assets/img/icon/inactive_gift.png'
import GiftActive from '../assets/img/icon/active_gift.png'
import UserInactive from '../assets/img/icon/inactive_user.png'
import UserActive from '../assets/img/icon/active_user.png'

const BottomNavigation = () => {
    return (
        <div className='bg-white border-t border-t-gray-100 w-full py-2 max-w-none sm:max-w-md mx-auto fixed bottom-0 left-0 right-0'>
            <div className='flex items-center justify-between flex-row flex-nowrap'>
                <NavLink to="/" className='group flex items-center justify-center flex-col basis-1/4 transition duration-200 ease-in-out'>
                    <img src={HomeInactive} alt='' className='w-8 group-hover:hidden'/>
                    <img src={HomeActive} alt='' className='w-8 hidden group-hover:block'/>
                    <span className='text-xs text-gray-800 font-medium py-1'>Main Page</span>
                </NavLink>
                <NavLink to="/game" className='group flex items-center justify-center flex-col basis-1/4 transition duration-200 ease-in-out'>
                    <img src={GameInactive} alt='' className='w-8 group-hover:hidden'/>
                    <img src={GameActive} alt='' className='w-8 hidden group-hover:block'/>
                    <span className='text-xs text-gray-800 font-medium py-1'>All Game</span>
                </NavLink>
                <NavLink to="/gift" className='group flex items-center justify-center flex-col basis-1/4 transition duration-200 ease-in-out'>
                    <img src={GiftInactive} alt='' className='w-8 group-hover:hidden'/>
                    <img src={GiftActive} alt='' className='w-8 hidden group-hover:block'/>
                    <span className='text-xs text-gray-800 font-medium py-1'>Gift</span>
                </NavLink>
                <NavLink to="/mine" className='group flex items-center justify-center flex-col basis-1/4 transition duration-200 ease-in-out'>
                    <img src={UserInactive} alt='' className='w-8 group-hover:hidden'/>
                    <img src={UserActive} alt='' className='w-8 hidden group-hover:block'/>
                    <span className='text-xs text-gray-800 font-medium py-1'>Info</span>
                </NavLink>
            </div>
        </div>
    )
}

export default BottomNavigation