import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
                <div className='flex items-center p-4 bg-white rounded-lg shadow-sm'>
                    <div className='p-3 mr-4 text-blue-500 bg-blue-100 rounded-full'></div>
                    <div>
                        <p className='mb-2 text-sm font-medium text-gray-600'>Total clients</p>
                        <p className='text-lg font-semibold text-gray-700'>6389</p>
                    </div>
                </div>
                <div className='flex items-center p-4 bg-white rounded-lg shadow-sm'>
                    <div className='p-3 mr-4 text-blue-500 bg-blue-100 rounded-full'></div>
                    <div>
                        <p className='mb-2 text-sm font-medium text-gray-600'>Total clients</p>
                        <p className='text-lg font-semibold text-gray-700'>6389</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard