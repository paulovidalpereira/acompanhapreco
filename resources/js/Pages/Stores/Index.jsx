import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import DataGrid from "@/Components/DataGrid";
import { FiIcon } from "@/Components/FiIcon";
import { Empty } from "@/Components/Empty";
import Dropdown from "@/Components/Dropdown";

export default function Index(props) {
    const { stores, columns } = props;

    const lineActions = (row) => {
        return (
            <Dropdown>
                <Dropdown.Trigger>
                    <FiIcon as="FiMoreVertical" />
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <Dropdown.Link
                        href={route("stores.edit", row.id)}
                        method="get"
                    >
                        Editar
                    </Dropdown.Link>
                    <Dropdown.Link
                        href={route("stores.destroy", row.id)}
                        method="delete"
                        as="button"
                    >
                        Excluir
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        );
    };

    return (
        <App
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex justify-between">
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        Lojas
                    </h1>
                    <div>
                        <Link
                            href={route("stores.create")}
                            className="btn btn--primary"
                        >
                            Nova Loja
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Lojas" />
            <div className="bg-white shadow-sm">
                {stores.total > 0 ? (
                    <DataGrid
                        columns={columns}
                        page={stores}
                        lineActions={lineActions}
                        dataKey="stores"
                    />
                ) : (
                    <Empty>Nenhuma loja cadastrada</Empty>
                )}
            </div>
        </App>
    );
}
