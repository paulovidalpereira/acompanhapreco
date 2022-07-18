import { useForm } from "@inertiajs/inertia-react";
import { ProductForm } from "../components/ProductForm";

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
