import { useForm } from "@inertiajs/inertia-react";
import App from "@/Layouts/App";
import { Form } from "../components/Form";

export const CreateView = (props) => {
    const store = { name: "", domain: "", class: "", status: 0 };
    const { data, setData, post, processing, errors } = useForm(store);

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
        post(route("stores.store"), data);
    };

    return (
        <App auth={props.auth} title="Nova Loja">
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
