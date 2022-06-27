import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import DataGrid from "@/Components/DataGrid";
import { Pagination } from "@/Components/Pagination";

export default function Index(props) {
    const { stores: page } = props;

    const columns = [
        { id: "id", label: "#" },
        { id: "name", label: "Name" },
        { id: "url", label: "URL" },
        { id: "class", label: "Class" },
        { id: "created_at", label: "Created At" },
    ];

    const Actions = ({ row }) => {
        return (
            <>
                <Link
                    href={route("stores.edit", row.id)}
                    method="get"
                    class="btn"
                >
                    Editar
                </Link>
                <Link
                    href={route("stores.destroy", row.id)}
                    method="delete"
                    class="btn"
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
                            class="btn"
                        >
                            Nova Loja
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Lojas" />
            <div className="bg-white overflow-hidden shadow-sm">
                <div className="flex justify-between items-center">
                    <div>
                        Página{" "}
                        <Link
                            href={page.prev_page_url}
                            className="btn"
                            disabled={page.current_page === 1}
                        >
                            {"<"}
                        </Link>{" "}
                        {page.current_page}{" "}
                        <Link
                            href={page.next_page_url}
                            className="btn"
                            disabled={page.current_page === page.last_page}
                        >
                            {">"}
                        </Link>{" "}
                        de {page.last_page} páginas | Exibir {"20"} por página |
                        Total de {page.total} registros encontrados
                    </div>
                    <Pagination page={page} />
                </div>
                <DataGrid
                    columns={columns}
                    data={page.data}
                    Actions={Actions}
                />
            </div>
        </App>
    );
}
