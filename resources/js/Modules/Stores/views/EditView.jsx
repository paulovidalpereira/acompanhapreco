import App from "@/Layouts/App";
import { useForm } from "@inertiajs/inertia-react";
import { Form } from "../components/Form";

export const EditView = (props) => {
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
        console.log({ data });
        put(route("stores.update", store.id), data);
    };

    return (
        <App auth={props.auth} title="Editar Loja">
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
};
