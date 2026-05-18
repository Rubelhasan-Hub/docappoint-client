import DoctorsCard from '@/components/DoctorsCard';
import React from 'react';

const AllAppointmentPage = async () => {
    const res = await fetch('http://localhost:5000/doctors')
    const data = await res.json()

    return (
        <div className='max-w-10/12 mx-auto mb-20'>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 mt-30">
                {
                    data.map(d => (
                        <DoctorsCard key={d.id} data={d} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllAppointmentPage;