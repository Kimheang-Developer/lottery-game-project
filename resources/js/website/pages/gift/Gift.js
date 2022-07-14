import React from 'react'
import Header from '../../components/Header'
import NotFound from '../../assets/img/icon/not_found.png'
import BottomNavigation from '../../components/BottomNavigation'

const Gift = () => {
    return (
        <>
            <Header title="Gift" redirect="/"/>
            <div className='bg-gray-50 py-3 px-3 h-[calc(100vh-134px)] flex items-center justify-center flex-col'>
                <img src={NotFound} alt='' className='w-full'/>
                <h4 className='text-gray-400 text-sm'>Not Found</h4>
            </div>
            <BottomNavigation/>
        </>
    )
}

export default Gift