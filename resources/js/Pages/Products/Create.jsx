import React, { useState } from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Create(props) {

    const [formData, setFormData] = useState({
        name: null,
        url: null,
        store_id: null
    });

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
        Inertia.post('/products', formData);
        console.log(formData);
    };

    return (
        <App
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Novo Produto</h2>}
        >
            <Head title="Lojas" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="form-field">
                                    <label className="form-label">Produto:</label>
                                    <input name="name" id="name" className="form-input" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="form-field">
                                    <label className="form-label">Url:</label>
                                    <input name="url" id="url" className="form-input" value={formData.url} onChange={handleChange} />
                                </div>
                                <div className="form-field">
                                    <label className="form-label">Loja:</label>
                                    <input name="store_id" id="store_id" className="form-input" value={formData.store_id} onChange={handleChange} />
                                </div>
                                <div>
                                    <button type="submit" className="btn">Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
