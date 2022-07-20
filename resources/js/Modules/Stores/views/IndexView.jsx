import { Empty } from "@/Components/Empty";
import { DataGrid } from "@/Components/DataGrid";

export const IndexView = ({ stores, columns, lineActions }) => {
    return (
        <div>
            {stores.total > 0 ? (
                <DataGrid
                    columns={columns}
                    page={stores}
                    lineActions={lineActions}
                    dataKey="stores"
                    routeName="stores.index"
                />
            ) : (
                <Empty>Nenhuma loja cadastrada</Empty>
            )}
        </div>
    );
};
