import React from 'react'

const Card = ({ title, total, iconName }) => {
    return (
        <>
            <div className='flex items-center p-4 bg-white rounded-lg shadow-sm'>
                <div className='p-3 mr-4 text-blue-500 bg-blue-100 rounded-full'>
                    {iconName}
                </div>
                <div>
                    <p className='mb-2 text-sm font-medium text-gray-600'>
                        { title }
                    </p>
                    <p className='text-lg font-semibold text-gray-700'>
                        { total }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card