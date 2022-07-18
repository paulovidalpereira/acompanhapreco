import { useForm } from "@inertiajs/inertia-react";
import { ProductForm } from "../components/ProductForm";

export const EditView = (props) => {
    const { product, stores } = props;
    const { data, setData, put, processing, errors } = useForm(product);

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
        put(route("products.update", product.id), data);
    };

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
