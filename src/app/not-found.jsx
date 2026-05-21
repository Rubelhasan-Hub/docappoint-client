import Link from "next/link";
import { FaStethoscope, FaHome, FaCalendarCheck } from "react-icons/fa";

const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 bg-white">
            <div className="max-w-3xl w-full text-center">
                <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-xl shadow-green-100">
                    <FaStethoscope className="text-5xl text-green-600" />
                </div>

                <h1 className="text-8xl md:text-9xl font-extrabold text-green-600">
                    404
                </h1>

                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-black">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl mx-auto">
                    Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white font-semibold shadow-lg shadow-green-200 hover:bg-green-700 duration-300"
                    >
                        <FaHome />
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;