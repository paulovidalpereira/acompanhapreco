import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <App
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="bg-white overflow-hidden shadow-sm">
                    <div className="p-6 bg-white border-b border-gray-200">teste</div>
                </div>
        </App>
    );
}
