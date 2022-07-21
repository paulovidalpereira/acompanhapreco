import { Link, usePage } from "@inertiajs/inertia-react";
import { BiIcon } from "@/Components/BiIcon";
import { FiIcon } from "@/Components/FiIcon";
import { Pagination } from "@/Components/DataGrid";
import Dropdown from "@/Components/Dropdown";

const SortButton = ({ accessor, sort, dir, dataKey, urlPath }) => {
    const direction =
        sort === accessor ? (dir === "asc" ? "desc" : "asc") : "asc";

    const icon =
        sort === accessor
            ? dir === "asc"
                ? "BiSortDown"
                : "BiSortUp"
            : "BiSort";

    return {sort === accessor && (
            <>
                <Link
                    href={urlPath}
                    data={{
                        sort,
                        dir: direction,
                    }}
                    only={[dataKey]}
                    preserveState
                >
                    <BiIcon
                        as={icon}
                        style={{
                            width: "14px",
                            height: "14px",
                        }}
                    />
                </Link>
            </>
        )};
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
            <div className="border-b border-gray-200 flex justify-between items-center">
                <div></div>
                <Pagination page={page} dataKey={dataKey} />
            </div>
            <div className="-mx-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th key={col.accessor}>
                                    <div className="flex justify-between">
                                        <span>{col.label}</span>
                                        <SortButton
                                            accessor={col.accessor}
                                            sort={route().params.sort}
                                            dir={route().params.dir}
                                            dataKey={dataKey}
                                            urlPath={page.path}
                                        />
                                    </div>
                                </th>
                            ))}
                            {lineActions && <th className="actions"></th>}
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
