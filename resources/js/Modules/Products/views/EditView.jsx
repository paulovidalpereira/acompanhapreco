import { useForm } from "@inertiajs/inertia-react";
import { ProductForm } from "../components/ProductForm";

export const EditView = ({
    data,
    errors,
    processing,
    onHandleChange,
    onHandleSubmit,
    stores,
}) => {
    return (
        <div>
            <ProductForm
                data={data}
                errors={errors}
                processing={processing}
                handleSubmit={onHandleSubmit}
                handleChange={onHandleChange}
                sources={{ stores }}
            />
        </div>
    );
};
