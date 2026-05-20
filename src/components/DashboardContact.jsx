"use client"
import { Delete, TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

const DashboardContact = ({ data }) => {

    const [activeTab, setActiveTab] = useState("booking")

    return (
        <div className='space-y-7'>

            <div className='flex gap-2'>
                <Button
                    variant='secondary'
                    onPress={() => setActiveTab("booking")} className={
                        activeTab === "booking"
                            ? "bg-green-600 text-white"
                            : "bg-gray-200 text-black"
                    }>
                    My Booking
                </Button>

                <Button
                    variant='secondary'
                    onPress={() => setActiveTab("profile")} className={activeTab === "profile" ? "bg-green-600 text-white" : "bg-gray-200 text-black"}>
                    My Profile
                </Button>
            </div>

            {
                activeTab === "booking" && (
                    <div className='space-y-4 w-[40%] shadow-2xl border-4 border-green-200 rounded-2xl shadow-green-100'>
                        {
                            data.map(d => (
                                <div key={d._id} className='p-5 space-y-3'>
                                    <h1 className='text-2xl font-semibold'>
                                        {d.DoctorName}
                                    </h1>

                                    <p>{d.date}</p>
                                    <p>{d.time}</p>
                                    <p>{d.phone}</p>

                                    <div className="flex gap-3">
                                        <Button  variant="primary"><BiEdit/>Edit</Button>
                                        <Button variant="danger">Delete<TrashBin/></Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }

            {
                activeTab === "profile" && (
                    <div className='border p-5 rounded-xl w-[40%] '>
                        <h1 className='text-3xl font-semibold'>
                            My Profile
                        </h1>

                        <p>Name: {data[0]?.PatientName}</p>
                        <p>Email: {data[0]?.email}</p>
                        <p>Gender: {data[0]?.gender}</p>
                        <p>Phone: {data[0]?.phone}</p>
                    </div>
                )
            }

        </div>
    );
};

export default DashboardContact;