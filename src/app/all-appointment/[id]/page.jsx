import BookingModal from '@/components/BookingModal';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsHospital } from 'react-icons/bs';
import { IoLocationSharp, IoTimeOutline } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';

export async function generateMetadata({ params }) {
    return {
        title: `Doctor Details | DocAppointment`,
        description: "View doctor profile, rating, experience, and appointment details.",
    };
}

const DoctorDetailsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:5000/doctors/${id}`)
    const data = await res.json()

    return (
        <div>
            <div className="flex max-w-7/12 mx-auto gap-10 hover:translate-y-1 transition duration-300 m-20 items-center">
                <Image src={data.image} alt={data.name} width={500} height={500} className='w-130 h-150 rounded-2xl shadow-2xl shadow-green-200'></Image>
                <div className=" p-3 space-y-7">
                    <h2 className="card-title mt-2 text-5xl">{data.name}</h2>
                    <span className='bg-green-200 p-1 px-3 rounded-xl'>⭐{data.rating}</span>
                    <p className='text-green-500 font-semibold mt-5'>{data.specialty}</p>
                    <p>{data.description}</p>

                    <div className='grid grid-cols-2 gap-5'>
                        <div className="card bg-base-100 shadow-md border-2 border-gray-600/40 hover:translate-y-1 transition duration-300">
                            <div className="flex items-center gap-3">
                                <IoTimeOutline className='text-4xl bg-green-200 p-1 rounded-full' />
                                <div>
                                    <h2 className="card-title">Experience</h2>
                                    <p>{data.experience}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm border-2 border-gray-600/40 hover:translate-y-1 transition duration-300">
                            <div className="flex items-center gap-3">
                                <MdAttachMoney className='text-4xl bg-green-200 p-1 rounded-full' />
                                <div>
                                    <h2 className="card-title">Appointment Fee</h2>
                                    <p className='font-semibold'>৳ {data.fee}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm border-2 border-gray-600/40 hover:translate-y-1 transition duration-300">
                            <div className="flex items-center gap-3">
                                <IoLocationSharp className='text-4xl bg-green-200 p-1 rounded-full' />
                                <div>
                                    <h2 className="card-title">location</h2>
                                    <p>{data.location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm border-2 border-gray-600/40 hover:translate-y-1 transition duration-300">
                            <div className="flex items-center gap-3">
                                <BsHospital className='text-4xl bg-green-200 p-1 rounded-full' />
                                <div>
                                    <h2 className="card-title">Hospital</h2>
                                    <p>{data.hospital}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div>
                        <BookingModal data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetailsPage;