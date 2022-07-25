import React from 'react'
import DashboardCard from '../components/Card'

const Dashboard = () => {
    return (
        <>
            <h2 className='my-6 text-2xl font-semibold text-gray-700'>Dashboard</h2>
            <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
                <DashboardCard title={"Total clients"} total={6389}/>
                <DashboardCard title={"Account balance"} total={"$ 46,760.89"}/>
                <DashboardCard title={"Register Today"} total={6389}/>
                <DashboardCard title={"Total clients"} total={6389}/>
            </div>
        </>
    )
}

export default Dashboard