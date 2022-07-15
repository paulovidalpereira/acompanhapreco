import { useForm } from "@inertiajs/inertia-react";

export const ViewModel = (INITIAL_VALUES) => {
    const { data, setData, post, processing, errors } = useForm(INITIAL_VALUES);

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
        post(route("stores.store"), data);
    };

    return {
        data,
        setData,
        processing,
        errors,
        onHandleChange,
        onHandleSubmit,
    };
};
