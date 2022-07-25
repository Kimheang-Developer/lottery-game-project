import React from 'react'

const Bank = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='my-6 text-lg font-medium text-gray-700'>Bank List</h2>
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">Name</th>
                            <th scope="col" className="py-3 px-6">Card Name</th>
                            <th scope="col" className="py-3 px-6">Card Number</th>
                            <th scope="col" className="py-3 px-6">Branch</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th scope="col" className="py-3 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"/> */}
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>  
                            </td>
                            <td className="py-4 px-6">
                                SEO Specialist
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                                </div>
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex items-center space-x-3">
                                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-red-600 hover:underline">Remove</a>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"/> */}
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>  
                            </td>
                            <td className="py-4 px-6">
                                SEO Specialist
                            </td>
                            <td className="py-4 px-6">
                                
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex items-center space-x-3">
                                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-red-600 hover:underline">Remove</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Bank