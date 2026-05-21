import Dashboard from '@/components/Dashboard';
import React from 'react';


export const metadata = {
    title: "Dashboard | DocAppointment",
    description: "Manage your appointments, bookings, and profile from your dashboard.",
};

const DashboardPage = () => {
    return (
        <div>
            <Dashboard />
        </div>
    );
};

export default DashboardPage;