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
            <div className="bg-white overflow-hidden shadow-sm">
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
                                    <Link  href={route('products.edit', product.id)} method="get" class="btn">Editar</Link>
                                    <Link  href={route('products.destroy', product.id)} method="delete" class="btn">Excluir</Link>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </App>
    );
}
