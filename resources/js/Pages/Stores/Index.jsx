import React from "react";
import App from "@/Layouts/App";
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

    const actions = () => {
        return "teste123";
    };

    return (
        <App
            auth={props.auth}
            errors={props.errors}
            title="Lojas"
            actions={actions}
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
}
