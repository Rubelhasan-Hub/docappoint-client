
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import DashboardContact from './DashboardContact';

const Dashboard = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${session?.user.id}`)
    const data = await res.json()
    

    return (
        <div className='p-2 lg:max-w-10/12 lg:p-10 mx-auto space-y-7'>
            <h1 className='text-4xl font-semibold'>DashBoard</h1>

            <DashboardContact data={data} />
        </div>
    );
};

export default Dashboard;