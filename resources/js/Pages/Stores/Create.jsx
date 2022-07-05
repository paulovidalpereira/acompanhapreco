import React, { useState } from "react";
import App from "@/Layouts/App";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, useForm } from "@inertiajs/inertia-react";

import { Form } from "./Form";

export default function Create(props) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        domain: "",
        class: "",
    });

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
        post(route("stores.store"), data);
        console.log(data);
    };

    return (
        <App
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Nova Loja
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
