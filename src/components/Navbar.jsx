"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathName = usePathname()

    const {
        data: session,
    } = authClient.useSession()
    const user = session?.user

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <div className="shadow-lg sticky top-0 z-50 bg-white">
            <nav className="flex justify-between  max-w-11/12 mx-auto items-center p-5">
                <Link href='/'>
                    <div className="flex items-center">
                        <Image className="w-14" src="/assets/54-545682_doctor-logo-doctor-logo-png.png" alt="DocAppointment Logo" width={50} height={50} loading="eager"></Image>
                        <h2 className="text-2xl lg:text-3xl font-semibold"><span className="text-green-600">Doc</span>Appointment</h2>
                    </div>
                </Link>
                <div>
                    <ul className="hidden lg:flex gap-7 text-lg ">
                        <li><Link href="/" className={pathName === "/" ? "border-b-4 border-green-600" : "border-0"}>Home</Link></li>
                        <li><Link href="/all-appointment" className={pathName === "/all-appointment" ? "border-b-4 border-green-600" : "border-0"}>All Appointments</Link></li>
                        <li><Link href="/dashboard" className={pathName === "/dashboard" ? "border-b-4 border-green-600" : "border-0"}>Dashboard</Link></li>
                    </ul>
                </div>
                {
                    !user && <div className="hidden gap-3 lg:flex "> <Link href="/login"><Button variant="outline" className="hover:bg-blue-100">Login</Button></Link>
                        <Link href="/register"><Button className="bg-green-600 hover:bg-green-700">Register</Button></Link>
                    </div>
                }
                {
                    user && <div className="flex gap-2 items-center">
                        <Avatar>
                            <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image}/>
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <Link href="/"><Button variant="outline" className="btn btn-error text-white rounded-2xl" onClick={handleSignOut}>Logout<LuLogOut /></Button></Link>
                    </div>
                }

                <button onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)} className="md:hidden p-2 text-foreground">
                    {isMobileMenuOpen ? <RxCross2 size={24} /> : <FiMenu size={24} />}
                </button>

            </nav>
            {isMobileMenuOpen && (<div className="md:hidden bg-green-100 rounded-2xl">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4 items-end">
                    <div>
                        <ul className="space-y-4 text-lg ">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">All Appointments</Link></li>
                            <li><Link href="/">Dashboard</Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-1">
                        <Link href="/login"><Button variant="outline" className="hover:bg-blue-100">Login</Button></Link>
                        <Link href="/register"><Button className="bg-green-600 hover:bg-green-700">Register</Button></Link>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Navbar;