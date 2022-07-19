import { Link } from "@inertiajs/inertia-react";
import { FiIcon } from "@/Components/FiIcon";
import {
    Dropdown,
    DropdownButton,
    DropdownContent,
    DropdownItem,
} from "@/Components/Dropdown";
import { format } from "date-fns";

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
    return <span>{format(new Date(value), "dd/MM/yyyy HH:mm:ss")}</span>;
};

const Actions = () => {
    return (
        <Link
            as="button"
            href={route("stores.create")}
            className="btn btn--primary"
        >
            <FiIcon as="FiPlusSquare" /> <span>Nova Loja</span>
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
                <DropdownItem href={route("stores.edit", row.id)} method="get">
                    Editar
                </DropdownItem>
                <DropdownItem
                    as="button"
                    href={route("stores.destroy", row.id)}
                    method="delete"
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
        { accessor: "name", label: "Loja" },
        { accessor: "domain", label: "Dominio" },
        { accessor: "class", label: "Classe" },
        { accessor: "status", label: "Status", Cell: StatusCell },
        { accessor: "created_at", label: "Criado em", Cell: DateTimeCell },
    ];

    return { columns, lineActions, Actions };
};
