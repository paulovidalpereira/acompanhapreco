import { StoreForm } from "../components/StoreForm";

export const EditView = ({
    data,
    errors,
    processing,
    onHandleChange,
    onHandleSubmit,
}) => {
    return (
        <StoreForm
            data={data}
            errors={errors}
            processing={processing}
            handleChange={onHandleChange}
            handleSubmit={onHandleSubmit}
        />
    );
};
