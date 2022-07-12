import { useForm } from "@inertiajs/inertia-react";
import App from "@/Layouts/App";
import { Form } from "../components/Form";

export const CreateView = (props) => {
    const { stores } = props;
    const product = { name: null, url: null, store_id: null, status: 0 };
    const { data, setData, post, processing, errors } = useForm(product);

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
        post(route("products.store"), data);
    };

    return (
        <App auth={props.auth} title="Novo Produto">
            <div className="bg-white overflow-hidden shadow-sm">
                <div className="p-4 bg-white border-b border-gray-200">
                    <Form
                        data={data}
                        errors={errors}
                        processing={processing}
                        handleSubmit={onHandleSubmit}
                        handleChange={onHandleChange}
                        sources={{ stores }}
                    />
                </div>
            </div>
        </App>
    );
};
