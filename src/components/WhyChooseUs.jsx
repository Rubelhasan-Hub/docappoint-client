import { FaUserDoctor, FaClock, FaShieldHeart, FaCalendarCheck } from "react-icons/fa6";

const WhyChooseUs = () => {
    const items = [
        {
            icon: <FaUserDoctor />,
            title: "Expert Doctors",
            desc: "Consult with experienced and certified medical specialists.",
        },
        {
            icon: <FaClock />,
            title: "24/7 Support",
            desc: "Get healthcare support anytime when you need it most.",
        },
        {
            icon: <FaCalendarCheck />,
            title: "Easy Appointment",
            desc: "Book your doctor appointment quickly with simple steps.",
        },
        {
            icon: <FaShieldHeart />,
            title: "Trusted Care",
            desc: "We ensure safe, reliable and patient-focused healthcare.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-600 mt-2 text-base md:text-lg">
                        We are committed to providing reliable healthcare services
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-2xl shadow-2xl shadow-gray-200 border border-gray-100 hover:-translate-y-2 duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-green-200 text-black flex items-center justify-center text-2xl mb-5 group-hover:bg-green-600 group-hover:text-white duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-black mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;