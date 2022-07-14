import React from 'react'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'

const Game = () => {
    return (
        <>
            <Header title="All Game" redirect="/"/>
            <div className='bg-gray-50 py-3 px-3 h-[calc(100vh-134px)]'>
                
            </div>
            <BottomNavigation/>
        </>
    )
}

export default Game