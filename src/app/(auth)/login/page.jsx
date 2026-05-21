import LoginPage from '@/components/LoginPage';
import React from 'react';
export const metadata = {
    title: "Login | DocAppointment",
    description: "Login to your DocAppointment account to manage bookings and appointments.",
};


const page = () => {
    return (
        <LoginPage />
    );
};

export default page;