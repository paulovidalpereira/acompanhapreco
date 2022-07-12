import { Link } from "@inertiajs/inertia-react";
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
        <Link href={route("stores.create")} className="btn btn--primary">
            Nova Loja
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
                <Dropdown.Link href={route("stores.edit", row.id)} method="get">
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

export const IndexView = (props) => {
    const { stores } = props;

    const columns = [
        { accessor: "id", label: "#" },
        { accessor: "name", label: "Loja" },
        { accessor: "domain", label: "Dominio" },
        { accessor: "class", label: "Classe" },
        { accessor: "status", label: "Status", Cell: StatusCell },
        { accessor: "created_at", label: "Criado em", Cell: DateTimeCell },
    ];

    return (
        <App
            auth={props.auth}
            errors={props.errors}
            title="Lojas"
            Actions={Actions}
        >
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
};
