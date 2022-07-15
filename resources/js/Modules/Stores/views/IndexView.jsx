import { Link } from "@inertiajs/inertia-react";
import { DataGrid } from "@/Components/DataGrid";
import { FiIcon } from "@/Components/FiIcon";
import { Empty } from "@/Components/Empty";
import Dropdown from "@/Components/Dropdown";
import * as dateFns from "date-fns";

export const IndexView = ({ stores, columns, lineActions }) => {
    return (
        <div>
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
    );
};
