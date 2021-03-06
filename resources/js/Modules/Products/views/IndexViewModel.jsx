import { Link } from "@inertiajs/inertia-react";
import * as dateFns from "date-fns";
import { DataGrid } from "@/Components/DataGrid";
import { FiIcon } from "@/Components/FiIcon";
import { Empty } from "@/Components/Empty";
import {
    Dropdown,
    DropdownButton,
    DropdownContent,
    DropdownItem,
} from "@/Components/Dropdown";

const StatusCell = (value) => {
    return (
        <span>
            {value === 1 ? (
                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    Ativo
                </span>
            ) : (
                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-md text-xs font-medium bg-red-100 text-red-800">
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
            <DropdownButton>
                <FiIcon as="FiMoreVertical" />
            </DropdownButton>
            <DropdownContent>
                <DropdownItem
                    href={route("products.edit", row.id)}
                    method="get"
                >
                    Editar
                </DropdownItem>
                <DropdownItem
                    href={route("products.destroy", row.id)}
                    method="delete"
                    as="button"
                >
                    Excluir
                </DropdownItem>
            </DropdownContent>
        </Dropdown>
    );
};

export const IndexViewModel = () => {
    const columns = [
        { accessor: "id", label: "#" },
        { accessor: "name", label: "Produto" },
        { accessor: "url", label: "url" },
        { accessor: "store", label: "Loja" },
        { accessor: "status", label: "Status", Cell: StatusCell },
        { accessor: "created_at", label: "Criado em", Cell: DateTimeCell },
    ];

    return { columns, lineActions, Actions };
};
