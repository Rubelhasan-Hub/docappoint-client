import RegisterPage from '@/components/RegisterPage';
import React from 'react';

export const metadata = {
    title: "Register | DocAppointment",
    description: "Create a DocAppointment account to book trusted doctors online.",
};

const page = () => {
    return (
        <div>
            <RegisterPage />
        </div>
    );
};

export default page; <RegisterPage />