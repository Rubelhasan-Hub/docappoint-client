import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="shadow-lg">
            <nav className="flex justify-between  max-w-11/12 mx-auto items-center p-5">
                <div className="flex items-center">
                    <Image className="w-14" src="/assets/54-545682_doctor-logo-doctor-logo-png.png" alt="DocAppointment Logo" width={50} height={50} loading="eager"></Image>
                    <h2 className="text-3xl font-semibold"><span className="text-green-600">Doc</span>Appointment</h2>
                </div>
                <div>
                    <ul className="flex gap-7 text-lg">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">All Appointments</Link></li>
                        <li><Link href="/">Dashboard</Link></li>
                    </ul>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline">Login</Button>
                    <Button className="bg-green-600">Register</Button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;