import { useForm } from "@inertiajs/inertia-react";

export const ViewModel = (INITIAL_STATE) => {
    const { data, setData, post, put, processing, errors } =
        useForm(INITIAL_STATE);

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
