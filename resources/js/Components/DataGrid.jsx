import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { FiEdit2, FiX } from "react-icons/fi";
import { Pagination } from "@/Components/Pagination";

export default function DataGrid({ columns, page, sortDir, lineActions }) {
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    Página{" "}
                    <Link
                        href={page.prev_page_url}
                        className="btn"
                        disabled={page.current_page === 1}
                    >
                        {"<"}
                    </Link>{" "}
                    {page.current_page}{" "}
                    <Link
                        href={page.next_page_url}
                        className="btn"
                        disabled={page.current_page === page.last_page}
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
                            <td key={col.id}>
                                <Link href={route('stores.index')} data={{sort: col.id, dir: (sortDir[col.id] && sortDir[col.id] === 'asc') ? 'desc' : 'asc'}}>{col.label} {sortDir[col.id] && sortDir[col.id] === 'asc' ? "+" : "-"}</Link>
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
                                    return <td key={col.id}>{col.Cell(item[col.id])}</td>
                                }
                                return <td key={col.id}>{item[col.id]}</td>
                            })}
                            {lineActions && (
                                <td className="actions">
                                    <div className="grid grid-cols-2 gap-x-1">
                                        {lineActions(item)}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
