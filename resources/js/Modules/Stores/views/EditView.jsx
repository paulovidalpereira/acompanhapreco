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
        <div>
            <Form
                data={data}
                errors={errors}
                processing={processing}
                handleSubmit={onHandleSubmit}
                handleChange={onHandleChange}
            />
        </div>
    );
};
