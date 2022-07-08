import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { BiIcon } from "@/Components/BiIcon";
import { FiIcon } from "@/Components/FiIcon";
import { Pagination } from "@/Components/Pagination";
import Dropdown from "@/Components/Dropdown";

export default function DataGrid({ columns, page, lineActions, dataKey }) {
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    Página{" "}
                    <Link
                        href={page.prev_page_url}
                        className="btn btn--small"
                        disabled={page.current_page === 1}
                        only={[dataKey]}
                    >
                        {"<"}
                    </Link>{" "}
                    {page.current_page}{" "}
                    <Link
                        href={page.next_page_url}
                        className="btn btn--small"
                        disabled={page.current_page === page.last_page}
                        only={[dataKey]}
                    >
                        {">"}
                    </Link>{" "}
                    de {page.last_page} páginas
                    {" | "}
                    Exibir {"20"} por página
                    {" | "}
                    Total de {page.total} registros encontrados
                </div>
                <Pagination page={page} />
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <td key={col.accessor}>
                                <span>{col.label}</span>
                                {route().params.sort === col.accessor &&
                                    route().params.dir === "asc" && (
                                        <Link
                                            className="btn btn--small"
                                            href={route("stores.index")}
                                            data={{
                                                sort: col.accessor,
                                                dir: "desc",
                                            }}
                                            only={[dataKey]}
                                        >
                                            <BiIcon
                                                as="BiSortDown"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                }}
                                            />
                                        </Link>
                                    )}
                                {route().params.sort === col.accessor &&
                                    route().params.dir === "desc" && (
                                        <Link
                                            className="btn btn--small"
                                            href={route("stores.index")}
                                            data={{
                                                sort: col.accessor,
                                                dir: "asc",
                                            }}
                                            only={[dataKey]}
                                        >
                                            <BiIcon
                                                as="BiSortUp"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                }}
                                            />
                                        </Link>
                                    )}
                                {route().params.sort !== col.accessor && (
                                    <Link
                                        className="btn btn--small"
                                        href={route("stores.index")}
                                        data={{
                                            sort: col.accessor,
                                            dir: "asc",
                                        }}
                                        only={[dataKey]}
                                    >
                                        <BiIcon
                                            as="BiSort"
                                            style={{
                                                width: "16px",
                                                height: "16px",
                                            }}
                                        />
                                    </Link>
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
                                <td className="actions">{lineActions(item)}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
