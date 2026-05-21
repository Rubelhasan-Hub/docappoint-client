import Search from '@/components/Search';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';


export const metadata = {
    title: "All Appointments | DocAppointment",
    description: "Browse trusted doctors and book appointments easily with DocAppointment.",
};

const AllAppointmentPage = async () => {


    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json()

    return (
        <div className='max-w-10/12 mx-auto mb-20'>

            <div>
                <Search data={data} />
            </div>
        </div>
    );
};

export default AllAppointmentPage;