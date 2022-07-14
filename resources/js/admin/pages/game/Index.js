import React from 'react'

const Index = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='my-6 text-lg font-medium text-gray-700'>Live Game</h2>
            </div>
            <div className='grid grid-cols-2 mb-5 gap-5'>
                <div className='bg-white w-full shadow-sm p-5'>
                    <div>
                        <h4 className='font-semibold'>60 Minutes Next Result <span className='font-extrabold px-2.5'>01:30:25</span></h4>
                    </div>
                    <div className='w-full overflow-hidden border border-gray-100'>
                        <div className='w-full overflow-x-auto'>
                            <table className='w-full whitespace-no-wrap'>
                                <thead>
                                    <tr className='text-xs font-semibold tracking-wide  text-center text-gray-500 uppercase border-b'>
                                        <th className=' py-3'>#</th>
                                        <th className=' py-3'>No</th>
                                        <th className=' py-3'>2022070105</th>
                                        <th className=' py-3'>2022070106</th>
                                        <th className=' py-3'>2022070107</th>
                                        <th className=' py-3'>2022070108</th>
                                    </tr>
                                    <tr className='text-xs font-semibold tracking-wide text-gray-500 uppercase border-b'>
                                        <th className=' py-3'>#</th>
                                        <th className=' py-3'>Number</th>
                                        <th className=' py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>1</span></th>
                                        <th className=' py-3'><span className='text-white bg-red-800 rounded-full py-2 px-4'>8</span></th>
                                        <th className=' py-3'><span className='text-white bg-red-800 rounded-full py-2 px-4'>9</span></th>
                                        <th className=' py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>4</span></th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y'>
                                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full shadow-sm p-5'>
                    <div>
                        <h4 className='font-semibold'>60 Minutes Result Now <span className='px-2.5 font-extrabold'>01:40:25</span></h4>
                    </div>
                    <div className='w-full overflow-hidden border border-gray-100'>
                        <div className='w-full overflow-x-auto'>
                            <table className='w-full whitespace-no-wrap'>
                                <thead>
                                <tr className='text-xs font-semibold tracking-wide  text-center text-gray-500 uppercase border-b'>
                                        <th className=' py-3'>#</th>
                                        <th className=' py-3'>No</th>
                                        <th className=' py-3'>2022070104</th>
                                        <th className=' py-3'>2022070103</th>
                                        <th className=' py-3'>2022070102</th>
                                        <th className=' py-3'>2022070101</th>
                                    </tr>
                                    <tr className='text-xs font-semibold tracking-wide text-gray-500 uppercase border-b'>
                                        <th className=' py-3'>#</th>
                                        <th className=' py-3'>Number</th>
                                        <th className=' py-3'><span className='text-white bg-red-800 rounded-full py-2 px-4'>5</span></th>
                                        <th className=' py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>3</span></th>
                                        <th className=' py-3'><span className='text-white bg-red-800 rounded-full py-2 px-4'>7</span></th>
                                        <th className=' py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>2</span></th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y'>
                                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Total & Count */}
            <div className='bg-white w-full shadow-sm p-5'>
                <div className='w-full overflow-hidden border border-gray-100'>
                    <div className='w-full overflow-x-auto'>
                        <table className='w-full whitespace-no-wrap'>
                            <thead>
                                <tr className='text-xs font-semibold tracking-wide text-center text-gray-500 uppercase border-b'>
                                    <th className='px-4 py-3'></th>
                                    <th className='px-4 py-3'>Client Count</th>
                                    <th className='px-4 py-3 bg-blue-700 text-white'>Color Blue</th>
                                    <th className='px-4 py-3 bg-red-700 text-white'>Color Red</th>
                                    <th className='px-4 py-3'>Number Bet Bigest</th>
                                    <th className='px-4 py-3'>Odd</th>
                                    <th className='px-4 py-3'>Even</th>
                                    <th className='px-4 py-3'>Amount</th>
                                    <th className='px-4 py-3'></th>
                                   
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y '>
                                <tr className='text-center'>
                                    <td className='px-4 py-3'></td>
                                    <td className='px-4 py-3 font-extrabold'>15</td>
                                    <td className='px-4 py-3 font-extrabold'>200$</td>
                                    <td className='px-4 py-3 font-extrabold'>100$</td>
                                    <td className='px-4 py-3 font-extrabold'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>3</span> 300$</td>
                                    <td className='px-4 py-3 font-extrabold'>170$</td>
                                    <td className='px-4 py-3 font-extrabold'>360$</td>
                                    <td className='px-4 py-3 font-extrabold'>1500$</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*End Total & Count */}

            <div className='bg-white w-full shadow-sm p-5'>
                <div className='w-full overflow-hidden border border-gray-100'>
                    <div className='w-full overflow-x-auto'>
                        <table className='w-full whitespace-no-wrap'>
                            <thead>
                           
                                {/* <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b '>
                                    <td className='px-4 py-3'>#</td>
                                    <td className='px-4 py-3'>EVEN ODD </td>
                                    <td className='px-4 py-3'><span>Even</span></td>
                                    <td className='px-4 py-3'><span>Odd</span></td>
                                    <td className='px-4 py-3'><span>Even</span></td>
                                    <td className='px-4 py-3'><span>Odd</span></td>
                                    <td className='px-4 py-3'><span>Even</span></td>
                                    <td className='px-4 py-3'><span>Odd</span></td>
                                    <td className='px-4 py-3'><span>Even</span></td>
                                    <td className='px-4 py-3'><span>Odd</span></td>
                                    <td className='px-4 py-3'><span>Even</span></td> 
                                </tr> */}
                                <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b'>
                                    <th className='px-4 py-3'>#</th>
                                    <th className='px-4 py-3'>Number</th>
                                    <th className='px-4 py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>1</span></th>
                                    <th className='px-4 py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>2</span></th>
                                    <th className='px-4 py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>3</span></th>
                                    <th className='px-4 py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>4</span></th>
                                    <th className='px-4 py-3'><span className='text-white bg-blue-800 rounded-full py-2 px-4'>5</span></th>
                                    <th className='px-4 py-3'><span className='text-white bg-red-800 rounded-full py-2 px-4'>6</span></th>
                                    <th className='px-4 py-3'><span className='text-white bg-red-800 rounded-full py-2 px-4'>7</span></th>
                                    <th className='px-4 py-3'><span className='text-white bg-red-800 rounded-full py-2 px-4'>8</span></th>
                                    <th className='px-4 py-3'><span className='text-white bg-red-800 rounded-full py-2 px-4'>9</span></th>
                                    
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y'>
                                
                                <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b '>
                                    <td className='px-4 py-3'>#</td>
                                    <td className='px-4 py-3'>Total Bet</td>
                                    <td className='px-4 py-3 font-extrabold'><span>120$</span></td>
                                    <td className='px-4 py-3 font-extrabold'><span>120$</span></td>
                                    <td className='px-4 py-3 font-extrabold'><span>300$</span></td>
                                    <td className='px-4 py-3 font-extrabold'><span>70$</span></td>
                                    <td className='px-4 py-3 font-extrabold'><span>50$</span></td>
                                    <td className='px-4 py-3 font-extrabold'><span>170$</span></td>
                                    <td className='px-4 py-3 font-extrabold'><span>190$</span></td>
                                    <td className='px-4 py-3 font-extrabold'><span>280$</span></td>
                                    <td className='px-4 py-3 font-extrabold'><span>200$</span></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            
            <div className='bg-white w-full shadow-sm p-5'>
                <div className='w-full overflow-hidden border border-gray-100'>
                    <div className='w-full overflow-x-auto'>
                        <table className='w-full whitespace-no-wrap'>
                            <thead>
                                <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b'>
                                    <th className='px-4 py-3'>#</th>
                                    <th className='px-4 py-3'>Client User (15)</th>
                                    <th className='px-4 py-3'>Color  (3)</th>
                                    <th className='px-4 py-3'>Number  (7)</th>
                                    <th className='px-4 py-3'>Odd(2)</th>
                                    <th className='px-4 py-3'>Even  (3)</th>
                                    <th className='px-4 py-3'>Amount (1500$)</th>
                                    <th className='px-4 py-3'>Time</th>
                                    
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