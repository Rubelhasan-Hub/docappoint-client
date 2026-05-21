"use client"
import { TrashBin } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdAccessTime, MdDateRange } from "react-icons/md";
import EditBooking from "./EditBooking";
import { authClient } from "@/lib/auth-client";
import UpdateProfile from "./UpdateProfile";
import { useRouter } from "next/navigation";

const DashboardContact = ({ data }) => {
    const Route = useRouter();
    const [activeTab, setActiveTab] = useState("booking")

    const { data: session, } = authClient.useSession()
    const user = session?.user


    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/booking/${user.id}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json"
            }
        })

        Route.refresh();
    }
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
                    <div className='space-y-4 w-[40%] shadow-2xl border-2 border-gray-200 rounded-2xl shadow-green-100'>
                        {
                            data.length === 0 ? (
                                <div className="text-center py-10">
                                    <h1 className="text-2xl font-bold text-red-500">
                                        No Appointment Found
                                    </h1>
                                </div>
                            ) :
                                <div className="space-y-5">
                                    {
                                        data.map(d => (
                                            <div key={d._id} className="p-5 rounded-2xl border border-gray-200 shadow-lg bg-white">
                                                <h1 className='text-3xl font-bold text-blue-500'>
                                                    {d.DoctorName}
                                                </h1>

                                                <div className="flex items-center font-semibold gap-1 mt-3">
                                                    <BiUser />
                                                    <p>Patient : {d.PatientName}</p>
                                                </div>

                                                <div className="flex items-center font-semibold gap-1 mt-2">
                                                    <MdAccessTime />
                                                    <p>Time : {d.time}</p>
                                                </div>

                                                <div className="flex items-center font-semibold gap-1 mt-2">
                                                    <MdDateRange />
                                                    <p>Date : {d.date}</p>
                                                </div>

                                                <div className="flex gap-3 mt-5">
                                                    <EditBooking data={d} />

                                                    <Button
                                                        variant="danger"
                                                        onPress={() => handleDelete(d._id)}
                                                    >
                                                        Delete <TrashBin />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                        }

                    </div>
                )
            }

            {
                activeTab === "profile" && (
                    <div className='space-y-4 m-23 w-[40%] shadow-2xl border-2 border-gray-200 rounded-2xl shadow-green-100'>
                        <div className='p-5 space-y-3'>
                            <Avatar className="w-20 h-20 rounded-full">
                                <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user.image} />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                            <h1 className='text-3xl font-bold text-blue-500'>
                                {user.name}
                            </h1>
                            <div className="flex text-2xl items-center font-semibold gap-1">
                                <BiUser />
                                <p>Email: {user.email}</p>
                            </div>

                            <div className="flex gap-3">
                                <UpdateProfile data={user} />
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default DashboardContact;