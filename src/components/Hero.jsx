import { Button } from "@heroui/react";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import DoctorsCard from "./DoctorsCard";


const HeroSection = async () => {
    const res = await fetch('http://localhost:5000/3doctors')
    const data = await res.json()

    return (
        <div className="max-w-9/12 mx-auto mt-5">
            <div className="lg:flex justify-between items-center">
                <div className="space-y-7">
                    <span className="bg-green-100 p-2 px-4 rounded-2xl font-semibold text-green-400 ">Your wealth,Our Priority</span>
                    <br />
                    <h1 className="text-5xl gl:text-7xl font-semibold mt-5">Books Appointments <br /> With trusted Doctors</h1>
                    <p>DocAppointment makes it easy to find and book appointments with trusted doctors in your area. <br /> You can also view doctor profiles, read reviews, and get directions to their clinics.</p>
                    <div className="flex gap-6">
                        <Button variant="outline" className="p-6">Book Appointment  <SlCalender /></Button>
                        <Button variant="outline" className="p-6 bg-green-600 text-white">Learn more <BiRightArrow /></Button>
                    </div>
                </div>
                <div><Image src='/assets/doctor-with-his-arms-crossed-white-background.jpg' alt="Hero Image" width={1000} height={1000}></Image></div>
            </div>

            {/* Doctors Card section */}

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-30">
                {
                    data.map(d => (
                        <DoctorsCard key={d.id} data={d} />
                    ))
                }
            </div>
        </div>
    );
};

export default HeroSection;