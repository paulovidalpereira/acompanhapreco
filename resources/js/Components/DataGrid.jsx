import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FiEdit2, FiX } from "react-icons/fi";

export default function DataGrid({ columns, data, Actions }) {
    return (
        <table className="w-full">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <td key={col.id}>{col.label}</td>
                    ))}
                    {Actions && <td className="actions"></td>}
                </tr>
            </thead>
            {data.map((item) => (
                <tr key={item.id}>
                    {columns.map((col) => (
                        <td key={col.id}>{item[col.id]}</td>
                    ))}
                    {Actions && (
                        <td className="actions">
                            <div className="grid grid-cols-2 gap-x-1">
                                <Actions row={item} />
                            </div>
                        </td>
                    )}
                </tr>
            ))}
        </table>
    );
}
