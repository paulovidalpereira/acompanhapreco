import { Link, usePage } from "@inertiajs/inertia-react";
import { BiIcon } from "@/Components/BiIcon";
import { FiIcon } from "@/Components/FiIcon";
import { Pagination } from "@/Components/DataGrid";
import Dropdown from "@/Components/Dropdown";

const SortButton = ({ accessor, direction, icon, dataKey, routeName }) => {
    return (
        <Link
            href={route(routeName)}
            data={{
                sort: accessor,
                dir: direction,
            }}
            only={[dataKey]}
            preserveState
        >
            <BiIcon
                as={icon}
                style={{
                    width: "16px",
                    height: "16px",
                }}
            />
        </Link>
    );
};

export const DataGrid = ({
    columns,
    page,
    lineActions,
    dataKey,
    routeName,
}) => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div></div>
                <Pagination page={page} dataKey={dataKey} />
            </div>
            <div className="-mx-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <td key={col.accessor}>
                                    <span>{col.label}</span>
                                    {route().params.sort === col.accessor &&
                                        route().params.dir === "asc" && (
                                            <SortButton
                                                accessor={col.accessor}
                                                direction={"desc"}
                                                icon={"BiSortDown"}
                                                dataKey={dataKey}
                                                routeName={routeName}
                                            />
                                        )}
                                    {route().params.sort === col.accessor &&
                                        route().params.dir === "desc" && (
                                            <SortButton
                                                accessor={col.accessor}
                                                direction={"asc"}
                                                icon={"BiSortUp"}
                                                dataKey={dataKey}
                                                routeName={routeName}
                                            />
                                        )}
                                    {route().params.sort !== col.accessor && (
                                        <SortButton
                                            accessor={col.accessor}
                                            direction={"asc"}
                                            icon={"BiSort"}
                                            dataKey={dataKey}
                                            routeName={routeName}
                                        />
                                    )}
                                </td>
                            ))}
                            {lineActions && <td className="actions"></td>}
                        </tr>
                    </thead>
                    <tbody>
                        {page.data.map((item) => (
                            <tr key={item.id}>
                                {columns.map((col) => {
                                    if (col.Cell) {
                                        return (
                                            <td key={col.accessor}>
                                                {col.Cell(item[col.accessor])}
                                            </td>
                                        );
                                    }
                                    return (
                                        <td key={col.accessor}>
                                            {item[col.accessor]}
                                        </td>
                                    );
                                })}
                                {lineActions && (
                                    <td className="actions">
                                        {lineActions(item)}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
