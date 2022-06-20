import React, { useState } from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Edit(props) {
    const { product, stores, errors } = props;

    const [formData, setFormData] = useState(product);

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
        Inertia.put('/products/'+product.id, {_token: this.$page.props.csrf_token, ...formData});
    };

    return (
        <App
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Produto</h2>}
        >
            <Head title="Lojas" />
            <div className="bg-white overflow-hidden shadow-sm">
                <div className="p-4 bg-white border-b border-gray-200">
                    <form onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label className="form-label">Produto:</label>
                            <input name="name" id="name" className="form-input" value={formData.name} onChange={handleChange} />
                            {errors.name && (<div className="text-sm text-red-500">{errors.name}</div>)}
                        </div>
                        <div className="form-field">
                            <label className="form-label">Url:</label>
                            <input name="url" id="url" className="form-input" value={formData.url} onChange={handleChange} />
                            {errors.url && (<div className="text-sm text-red-500">{errors.url}</div>)}
                        </div>
                        <div className="form-field">
                            <label className="form-label">Loja:</label>
                            <select name="store_id" id="store_id" className="form-input"  value={formData.store_id} onChange={handleChange}>
                                <option></option>
                                {stores.map(store => (
                                    <option value={store.id} key={store.id}>{store.name}</option>
                                ))}
                            </select>
                            {errors.store_id && (<div className="text-sm text-red-500">{errors.store_id}</div>)}
                        </div>
                        <div>
                            <button type="submit" className="btn">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </App>
    );
}
