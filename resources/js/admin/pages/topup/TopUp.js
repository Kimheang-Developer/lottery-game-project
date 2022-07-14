import React from 'react'

const Index = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='my-6 text-lg font-medium text-gray-700'>Top Up</h2>
            </div>
            <div className='bg-white w-full shadow-sm p-5'>
                <div className='w-full overflow-hidden border border-gray-100'>
                    <div className='w-full overflow-x-auto'>
                        <table className='w-full whitespace-no-wrap'>
                            <thead>
                                <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b'>
                                    <th className='px-4 py-3'>#</th>
                                    <th className='px-4 py-3'>Name</th>
                                    <th className='px-4 py-3'>Amount</th>
                                    <th className='px-4 py-3'>Receipt</th>
                                    <th className='px-4 py-3'>Date</th>
                                    <th className='px-4 py-3'>Status</th>
                                    <th className='px-4 py-3'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y'>
                                    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index