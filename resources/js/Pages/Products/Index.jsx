import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index(props) {
    const { products: page } = props;
    return (
        <App
            auth={props.auth}
            errors={props.errors}
            header={<div className="flex justify-between">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Produtos</h2>
                <div>
                    <Link  href={route('products.create')} method="get" class="btn">Novo Produto</Link>
                </div>
            </div>}
        >
            <Head title="Produtos" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <td>Produto</td>
                                        <td>URL</td>
                                        <td>Loja</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                {page.data.map(product => {
                                    return (
                                        <tr>
                                            <td>{product.name}</td>
                                            <td>{product.url}</td>
                                            <td>{product.store.name}</td>
                                            <td>
                                                <button className="btn">Editar</button>
                                                <button className="btn">Excluir</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
