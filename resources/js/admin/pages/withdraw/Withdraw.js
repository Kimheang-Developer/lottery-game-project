import React, { useState, useEffect } from 'react'
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator'
import '../../../assets/admin/css/main.css'

const Index = () => {
    const [data, setData] = useState([])

    const columns=[
        {title:"Name", field:"name"},
        {title:"Age", field:"age"},
        {title:"DOB", field:"dob"},    
        {title:"Favourite Color", field:"col"},
        {title: "Details", field: "details"},
    ]
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='my-6 text-lg font-medium text-gray-700'>Withdraw</h2>
            </div>
            <div className='bg-white border border-slate-200 rounded-md p-5'>
                <div>
                    <ReactTabulator
                        columns={columns}
                        layout={"fitColumns"}
                    />
                </div>
                <div className='flex items-center justify-between'>

                </div>
            </div>
        </>
    )
}

export default Index