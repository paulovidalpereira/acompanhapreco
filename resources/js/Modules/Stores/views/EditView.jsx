import App from "@/Layouts/App";
import { useForm } from "@inertiajs/inertia-react";
import { StoreForm } from "../components/StoreForm";

export const EditView = ({
    data,
    errors,
    processing,
    onHandleSubmit,
    onHandleChange,
}) => {
    return (
        <StoreForm
            data={data}
            errors={errors}
            processing={processing}
            handleSubmit={onHandleSubmit}
            handleChange={onHandleChange}
        />
    );
};
