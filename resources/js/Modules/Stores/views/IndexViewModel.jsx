import { Link } from "@inertiajs/inertia-react";
import { FiIcon } from "@/Components/FiIcon";
import Dropdown from "@/Components/Dropdown";
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
    return <span>{format(new Date(value), "dd/MM/yyyy H:mm:ss")}</span>;
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
