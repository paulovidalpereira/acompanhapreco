import App from "@/Layouts/App";
import { useForm } from "@inertiajs/inertia-react";
import { Form } from "../components/Form";

export const EditView = ({
    data,
    errors,
    processing,
    onHandleSubmit,
    onHandleChange,
}) => {
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
