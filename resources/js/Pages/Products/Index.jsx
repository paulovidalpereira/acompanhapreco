import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import App from "@/Layouts/App";
import DataGrid from "@/Components/DataGrid";
import { FiIcon } from "@/Components/FiIcon";
import { Empty } from "@/Components/Empty";
import Dropdown from "@/Components/Dropdown";
import * as dateFns from "date-fns";

const StatusCell = (value) => {
    return (
        <span>
            {value === 1 ? (
                <span class="inline-flex items-center gap-1.5 py-1 px-3 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    Ativo
                </span>
            ) : (
                <span class="inline-flex items-center gap-1.5 py-1 px-3 rounded-md text-xs font-medium bg-red-100 text-red-800">
                    Desativado
                </span>
            )}
        </span>
    );
};

const DateTimeCell = (value) => {
    return <span>{dateFns.format(new Date(value), "dd/MM/yyyy H:mm:ss")}</span>;
};

const Actions = () => {
    return (
        <Link href={route("products.create")} className="btn btn--primary">
            Novo Produto
        </Link>
    );
};

const lineActions = (row) => {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <button type="button" className="btn">
                    <FiIcon as="FiMoreVertical" />
                </button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Link
                    href={route("products.edit", row.id)}
                    method="get"
                >
                    Editar
                </Dropdown.Link>
                <Dropdown.Link
                    href={route("products.destroy", row.id)}
                    method="delete"
                    as="button"
                >
                    Excluir
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );
};

export default function Index(props) {
    const { products } = props;

    const columns = [
        { accessor: "id", label: "#" },
        { accessor: "name", label: "Produto" },
        { accessor: "url", label: "url" },
        { accessor: "store", label: "Loja" },
        { accessor: "status", label: "Status", Cell: StatusCell },
        { accessor: "created_at", label: "Criado em", Cell: DateTimeCell },
    ];

    return (
        <App
            auth={props.auth}
            errors={props.errors}
            title="Gerenciar Produtos"
            Actions={Actions}
        >
            <Head title="Gerenciar Produtos" />
            <div className="bg-white shadow-sm">
                {products.total > 0 ? (
                    <DataGrid
                        columns={columns}
                        page={products}
                        lineActions={lineActions}
                        dataKey="products"
                    />
                ) : (
                    <Empty>Nenhum produto cadastrado</Empty>
                )}
            </div>
        </App>
    );
}
