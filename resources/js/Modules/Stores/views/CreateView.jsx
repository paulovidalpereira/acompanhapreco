import { useForm } from "@inertiajs/inertia-react";
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
