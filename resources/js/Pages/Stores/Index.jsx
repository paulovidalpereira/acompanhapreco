import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index(props) {
    const { stores: page } = props;
    return (
        <App
            auth={props.auth}
            errors={props.errors}
            header={<div className="flex justify-between">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Lojas</h2>
                <div>
                    <Link  href={route('stores.create')} method="get" class="btn">Nova Loja</Link>
                </div>
            </div>}
        >
            <Head title="Lojas" />
            <div className="bg-white overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr>
                            <td>Loja</td>
                            <td>URL</td>
                            <td>Class</td>
                            <td></td>
                        </tr>
                    </thead>
                    {page.data.map(store => {
                        return (
                            <tr>
                                <td>{store.name}</td>
                                <td>{store.url}</td>
                                <td>{store.class}</td>
                                <td>
                                    <button className="btn">Editar</button>
                                    <button className="btn">Excluir</button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </App>
    );
}
