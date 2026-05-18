import Image from 'next/image';
import React from 'react';

const DoctorsCard = ({ data }) => {
    return (
        <div className="card rounded-3xl bg-base-100 w-110 shadow-xl flex justify-between hover:translate-y-1 transition duration-300">
            <Image src={data.image} alt={data.name} width={500} height={500} className='w-full h-90 rounded-xl'></Image>
            <div className=" p-3 space-y-2">
                <span className='bg-green-200 p-1 px-3 rounded-xl'>⭐{data.rating}</span>
                <h2 className="card-title mt-2 text-2xl">{data.name}</h2>
                <p className='text-green-500 font-semibold'>{data.specialty}</p>
                <p>{data.description}</p>
                <div className="divider"></div>
                <div className="card-actions justify-between items-center">
                    <div>
                        <h2 className='text-green-500 font-semibold text-xl'>Appointment Fee</h2>
                        <p className='font-semibold text-xl'>৳ {data.fee}</p>
                    </div>
                    <button className="btn btn-accent">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;