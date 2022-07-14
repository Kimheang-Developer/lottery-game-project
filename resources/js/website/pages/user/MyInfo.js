import React from 'react'
import { Link } from 'react-router-dom'
import BottomNavigation from '../../components/BottomNavigation'
import Setting from '../../assets/img/icon/setting.png'
import Withdraw from '../../assets/img/icon/withdraw.png'
import TopUp from '../../assets/img/icon/top-up.png'
import Representative from '../../assets/img/icon/medal.png'
import ServiceCenter from '../../assets/img/icon/call-center.png'
import Gift from '../../assets/img/icon/inactive_gift.png'
import Announcement from '../../assets/img/icon/announcement.png'
import Avatar from '../../assets/img/icon/avatar.png'

const MyInfo = () => {
    return (
        <>
            <div className='bg-gray-50 py-3 px-3 h-[calc(100vh-73px)]'>
                <div className='flex items-center justify-end'>
                    <Link to="/set-up">
                        <img src={Setting} alt='' className='w-5'/>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <Link to="">
                        <img src={Avatar} alt='' className='w-12 h-12 rounded-full'/>
                    </Link>
                    <h4 className='text-sm text-gray-600 font-medium mt-3'>Login / Register</h4>
                </div>
                <div className='flex items-center justify-between gap-4 mt-5'>
                    <Link to="/top-up" className='flex items-center justify-center flex-row basis-1/2 bg-white rounded drop-shadow-sm py-5'>
                        <img src={TopUp} alt='' className='w-5'/>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Top Up</span>
                    </Link>
                    <Link to="/withdraw" className='flex items-center justify-center flex-row basis-1/2 bg-white rounded drop-shadow-sm py-5'>
                        <img src={Withdraw} alt='' className='w-5'/>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Withdraw</span>
                    </Link>
                </div>
                <div className='bg-white drop-shadow-sm flex items-start justify-center flex-col flex-nowrap w-full mt-5 px-3'>
                    <Link to="/representative" className='flex items-center justify-start py-3 border-b border-b-gray-100 w-full'>
                        <img src={Representative} alt='' className='w-6'/>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Representative</span>
                    </Link>
                    <Link to="/service-center" className='flex items-center justify-start py-3 border-b border-b-gray-100 w-full'>
                    <img src={ServiceCenter} alt='' className='w-6'/>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Service Center</span>
                    </Link>
                    <Link to="/gift" className='flex items-center justify-start py-3 border-b border-b-gray-100 w-full'>
                        <img src={Gift} alt='' className='w-6'/>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Gift</span>
                    </Link>
                    <Link to="/announcement" className='flex items-center justify-start py-3 w-full'>
                        <img src={Announcement} alt='' className='w-6'/>
                        <span className='text-sm text-gray-800 font-medium ml-3'>Announcement</span>
                    </Link>
                </div>
            </div>
            <BottomNavigation/>
        </>
    )
}

export default MyInfo