import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/inertia-react';
import { Pagination} from '@/Components/Pagination';

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
                <div className="flex">
                    <Pagination page={page} />    
                </div>
            </div>}
        >
            <Head title="Produtos" />
            <div className="bg-white overflow-hidden shadow-sm">
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>URL</th>
                            <th>Loja</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {page.data.map(product => {
                        return (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.url}</td>
                                <td>{product.store.name}</td>
                                <td className="actions">
                                    <Link  href={route('products.edit', product.id)} method="get" class="btn">Editar</Link>
                                    <Link  href={route('products.destroy', product.id)} method="delete" class="btn">Excluir</Link>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </App>
    );
}
