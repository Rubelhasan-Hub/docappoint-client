import { Button, CalendarHeader } from "@heroui/react";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

const HeroSection = () => {
    return (
        <div className="max-w-9/12 mx-auto mt-19">
            <div className="flex justify-between items-center">
                <div className="space-y-5">
                    <p className="bg-green-50 p-2 rounded-2xl w-[31%] font-semibold text-green-400">Your wealth,Our Priority</p>
                    <h1 className="text-7xl font-semibold">Books Appointments <br /> With trusted Doctors</h1>
                    <p>DocAppointment makes it easy to find and book appointments with trusted doctors in your area. <br /> You can also view doctor profiles, read reviews, and get directions to their clinics.</p>
                    <div className="flex gap-6">
                        <Button variant="outline" className="p-6">Book Appointment  <SlCalender /></Button>
                        <Button variant="outline" className="p-6 bg-green-600 text-white">Learn more <BiRightArrow /></Button>
                    </div>
                </div>
                <div><Image src='/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8yOV9hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9tYWxlX2luZGlhbl9kb2N0b3JfaF8xNjdkY2ExMi0zY2NlLTQ2NDItOTJkYy02M2U2NDA4ZDEwMjAucG5n.webp' alt="Hero Image" width={500} height={500}></Image></div>
            </div>
        </div>
    );
};

export default HeroSection;