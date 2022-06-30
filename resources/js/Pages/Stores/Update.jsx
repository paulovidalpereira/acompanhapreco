import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head, usePage } from '@inertiajs/inertia-react';
import App from '@/Layouts/App';
import { Form } from './Form';

export default function Update(props) {
    const { store, errors } = props;
    const [formData, setFormData] = useState(store);


    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setFormData(values => ({
            ...values,
            [key]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(route('stores.update', store.id), formData);
    };

    return (
        <App
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Lojas</h2>}
        >
            <Head title="Lojas" />
            <div className="bg-white overflow-hidden shadow-sm">
                <div className="p-4 bg-white border-b border-gray-200">
                    <Form handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} />
                </div>
            </div>
        </App>
    );
}
