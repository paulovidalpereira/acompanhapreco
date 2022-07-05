import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, useForm } from "@inertiajs/inertia-react";
import App from "@/Layouts/App";
import { Form } from "./Form";

export default function Update(props) {
    const { store } = props;
    const { data, setData, put, processing, errors } = useForm(store);

    const onHandleChange = (e) => {
        setData((values) => ({
            ...values,
            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        }));
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        put(route("stores.update", store.id), data);
    };

    return (
        <App
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Editar Loja: {store.name}
                </h2>
            }
        >
            <Head title="Lojas" />
            <div className="bg-white overflow-hidden shadow-sm">
                <div className="p-4 bg-white border-b border-gray-200">
                    <Form
                        data={data}
                        errors={errors}
                        processing={processing}
                        handleSubmit={onHandleSubmit}
                        handleChange={onHandleChange}
                    />
                </div>
            </div>
        </App>
    );
}
