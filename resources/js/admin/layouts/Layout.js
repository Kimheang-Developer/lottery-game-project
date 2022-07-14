import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex h-screen bg-gray-50'>
                <Sidebar/>
                <div className='flex flex-col flex-1'>
                    <Header/>
                    <main className='bg-slate-100 h-full pb-16 overflow-y-auto'>
                        <div className='container px-6 mx-auto grid'>
                            { children }
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout