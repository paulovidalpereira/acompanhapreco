import { Empty } from "@/Components/Empty";
import { DataGrid } from "@/Components/DataGrid";

export const IndexView = ({ products, columns, lineActions }) => {
    return (
        <div>
            {products.total > 0 ? (
                <DataGrid
                    columns={columns}
                    page={products}
                    lineActions={lineActions}
                    dataKey="products"
                />
            ) : (
                <Empty>Nenhuma loja cadastrada</Empty>
            )}
        </div>
    );
};
