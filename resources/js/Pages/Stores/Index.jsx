import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import DataGrid from "@/Components/DataGrid";

export default function Index(props) {
    const { stores: page, columns, sortDir } = props;

    const lineActions = (row) => {
        return (
            <>
                <Link
                    method="get"
                    href={route("stores.edit", row.id)}
                    className="btn"
                >
                    Editar
                </Link>
                <Link
                    as="button"
                    type="button"
                    method="delete"
                    href={route("stores.destroy", row.id)}
                    className="btn"
                >
                    Excluir
                </Link>
            </>
        );
    };

    return (
        <App
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Lojas
                    </h2>
                    <div>
                        <Link
                            href={route("stores.create")}
                            method="get"
                            className="btn"
                        >
                            Nova Loja
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Lojas" />
            <div className="bg-white overflow-hidden shadow-sm">
                <DataGrid
                    columns={columns}
                    page={page}
                    sortDir={sortDir}
                    lineActions={lineActions}
                />
            </div>
        </App>
    );
}
