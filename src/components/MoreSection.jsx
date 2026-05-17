import { Card } from "@heroui/react";
import Link from "next/link";
import { BiRightArrowAlt, BiUser } from "react-icons/bi";

const MoreSection = () => {
    return (
        <div className="max-w-9/12 mx-auto mt-30 mb-20"  >
            <div>
                <h2 className="text-center text-4xl font-semibold">Our Services</h2>
                <h2 className="text-center text-lg">We provide a wide range of medical services to meet your needs</h2>
                <div className="flex justify-between mt-7">
                    <Card className="w-[320px] shadow-2xl p-10 space-y-1" variant="transparent">
                        <Card.Header>
                            <BiUser className="text-6xl p-4 bg-green-200 m-2 rounded-3xl"/>
                            <Card.Title className="text-2xl">Find Doctors</Card.Title>
                            <Card.Description>Easily Find Qualified Doctors in your Area</Card.Description>
                        </Card.Header>
                        <Link href="/" className="text-green-500 flex items-center gap-2"><span className="border-b-2 border-green-500">Read More</span> <BiRightArrowAlt /></Link>
                    </Card>
                    <Card className="w-[320px] shadow-2xl p-10 space-y-1" variant="transparent">
                        <Card.Header>
                            <BiUser className="text-6xl p-4 bg-green-200 m-2 rounded-3xl"/>
                            <Card.Title className="text-2xl">Find Doctors</Card.Title>
                            <Card.Description>Easily Find Qualified Doctors in your Area</Card.Description>
                        </Card.Header>
                        <Link href="/" className="text-green-500 flex items-center gap-2"><span className="border-b-2 border-green-500">Read More</span> <BiRightArrowAlt /></Link>
                    </Card>
                    <Card className="w-[320px] shadow-2xl p-10 space-y-1" variant="transparent">
                        <Card.Header>
                            <BiUser className="text-6xl p-4 bg-green-200 m-2 rounded-3xl"/>
                            <Card.Title className="text-2xl">Find Doctors</Card.Title>
                            <Card.Description>Easily Find Qualified Doctors in your Area</Card.Description>
                        </Card.Header>
                        <Link href="/" className="text-green-500 flex items-center gap-2"><span className="border-b-2 border-green-500">Read More</span> <BiRightArrowAlt /></Link>
                    </Card>
                    <Card className="w-[320px] shadow-2xl p-10 space-y-1" variant="transparent">
                        <Card.Header>
                            <BiUser className="text-6xl p-4 bg-green-200 m-2 rounded-3xl"/>
                            <Card.Title className="text-2xl">Find Doctors</Card.Title>
                            <Card.Description>Easily Find Qualified Doctors in your Area</Card.Description>
                        </Card.Header>
                        <Link href="/" className="text-green-500 flex items-center gap-2"><span className="border-b-2 border-green-500">Read More</span> <BiRightArrowAlt /></Link>
                    </Card>


                </div>
            </div>
        </div>
    );
};

export default MoreSection;